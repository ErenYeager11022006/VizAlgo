import React, { useState } from "react";

const GRID_SIZE = 10;
const DEFAULT_SPEED = 50;

const createEmptyGrid = () =>
  Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => ({
      isSource: false,
      isDestination: false,
      isObstacle: false,
      isVisited: false,
      isPath: false,
      isHighlightedPath: false,
      f: Infinity,
      g: Infinity,
      h: Infinity,
      previousNode: null,
    }))
  );

export default function AStarGridVisualizer() {
  const [grid, setGrid] = useState(createEmptyGrid);
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [clickCount, setClickCount] = useState(0);
  const [isPathFound, setIsPathFound] = useState(false);
  const [isAlgorithmRunning, setIsAlgorithmRunning] = useState(false);

  const handleCellClick = (row, col) => {
    if (isAlgorithmRunning) return;

    const newGrid = grid.map(gridRow =>
      gridRow.map(cell => ({ ...cell }))
    );

    if (clickCount === 0) {
      newGrid[row][col].isSource = true;
      setSource({ row, col });
    } else if (clickCount === 1) {
      newGrid[row][col].isDestination = true;
      setDestination({ row, col });
    } else {
      if (newGrid[row][col].isSource || newGrid[row][col].isDestination) return;
      newGrid[row][col].isObstacle = !newGrid[row][col].isObstacle;
    }

    setClickCount(prev => (prev === 2 ? prev : prev + 1));
    setGrid(newGrid);
  };

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  const heuristic = (nodeRow, nodeCol) => {
    return Math.abs(nodeRow - destination.row) + Math.abs(nodeCol - destination.col);
  };

  const getNeighbors = (row, col) => {
    const neighbors = [];
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < GRID_SIZE &&
        newCol >= 0 &&
        newCol < GRID_SIZE &&
        !grid[newRow][newCol].isObstacle
      ) {
        neighbors.push({ row: newRow, col: newCol });
      }
    }

    return neighbors;
  };

  const highlightPath = async (path) => {
    const newGrid = grid.map((gridRow, r) =>
      gridRow.map((cell, c) => ({
        ...cell,
        isHighlightedPath: path.some(node => node.row === r && node.col === c)
      }))
    );
    setGrid(newGrid);
  };

  const astar = async () => {
    const openSet = [{ row: source.row, col: source.col, f: 0, g: 0 }];
    const closedSet = new Set();
    const gridState = grid.map(row => row.map(cell => ({ ...cell })));
    
    gridState[source.row][source.col].g = 0;
    gridState[source.row][source.col].f = heuristic(source.row, source.col);

    while (openSet.length > 0) {
      openSet.sort((a, b) => a.f - b.f);
      const current = openSet.shift();
      
      if (current.row === destination.row && current.col === destination.col) {
        let curr = { row: current.row, col: current.col };
        const path = [];
        
        while (curr) {
          path.unshift(curr);
          curr = gridState[curr.row][curr.col].previousNode;
        }

        for (const node of path) {
          const newGrid = grid.map((gridRow, r) =>
            gridRow.map((cell, c) => ({
              ...cell,
              isPath: r === node.row && c === node.col || cell.isPath
            }))
          );
          setGrid(newGrid);
          await delay(speed / 2);
        }
        
        await delay(speed);
        await highlightPath(path);
        
        setIsPathFound(true);
        setIsAlgorithmRunning(false);
        return;
      }

      closedSet.add(`${current.row}-${current.col}`);

      const neighbors = getNeighbors(current.row, current.col);
      for (const neighbor of neighbors) {
        if (closedSet.has(`${neighbor.row}-${neighbor.col}`)) continue;

        const tentativeG = gridState[current.row][current.col].g + 1;

        if (!openSet.some(node => node.row === neighbor.row && node.col === neighbor.col)) {
          openSet.push(neighbor);
        } else if (tentativeG >= gridState[neighbor.row][neighbor.col].g) {
          continue;
        }

        gridState[neighbor.row][neighbor.col].previousNode = { row: current.row, col: current.col };
        gridState[neighbor.row][neighbor.col].g = tentativeG;
        gridState[neighbor.row][neighbor.col].h = heuristic(neighbor.row, neighbor.col);
        gridState[neighbor.row][neighbor.col].f = tentativeG + gridState[neighbor.row][neighbor.col].h;

        const newGrid = grid.map((gridRow, r) =>
          gridRow.map((cell, c) => ({
            ...cell,
            isVisited: r === neighbor.row && c === neighbor.col || cell.isVisited
          }))
        );
        setGrid(newGrid);
        await delay(speed);
      }
    }

    setIsAlgorithmRunning(false);
  };

  const visualizeAStar = async () => {
    if (!source || !destination || isAlgorithmRunning) return;
    setIsAlgorithmRunning(true);
    await astar();
  };

  const resetGrid = () => {
    setGrid(createEmptyGrid());
    setSource(null);
    setDestination(null);
    setClickCount(0);
    setIsPathFound(false);
    setIsAlgorithmRunning(false);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-4 flex space-x-3">
        <button
          onClick={visualizeAStar}
          disabled={isAlgorithmRunning}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {isAlgorithmRunning ? "Visualizing..." : "Start Visualization"}
        </button>
        <button
          onClick={resetGrid}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Reset Grid
        </button>
      </div>
      <div className="grid grid-cols-10 gap-1">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleCellClick(rowIndex, colIndex)}
              className={`w-8 h-8 border cursor-pointer ${
                cell.isSource
                  ? "bg-green-500"
                  : cell.isDestination
                  ? "bg-blue-500"
                  : cell.isObstacle
                  ? "bg-black"
                  : cell.isHighlightedPath
                  ? "bg-purple-500"
                  : cell.isPath
                  ? "bg-purple-500"
                  : cell.isVisited
                  ? "bg-yellow-300"
                  : "bg-gray-200"
              }`}
            />
          ))
        )}
      </div>
      <div className="mt-4">
        <label htmlFor="speed" className="mr-2">Speed:</label>
        <input
          id="speed"
          type="range"
          min="50"
          max="1000"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <span className="ml-2">{speed} ms</span>
      </div>
    </div>
  );
}