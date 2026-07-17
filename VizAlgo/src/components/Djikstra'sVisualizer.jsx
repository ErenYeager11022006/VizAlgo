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
      distance: Infinity,
      previousNode: null,
    }))
  );

export default function DijkstraGridVisualizer() {
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

  const getUnvisitedNeighbors = (row, col, visited) => {
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
        !visited[newRow][newCol] &&
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

  const dijkstra = async () => {
    const visited = Array.from({ length: GRID_SIZE }, () =>
      Array.from({ length: GRID_SIZE }, () => false)
    );

    const distances = Array.from({ length: GRID_SIZE }, () =>
      Array.from({ length: GRID_SIZE }, () => Infinity)
    );

    const previous = Array.from({ length: GRID_SIZE }, () =>
      Array.from({ length: GRID_SIZE }, () => null)
    );

    distances[source.row][source.col] = 0;
    let queue = [{ row: source.row, col: source.col, distance: 0 }];

    while (queue.length > 0) {
      queue.sort((a, b) => a.distance - b.distance);
      const { row, col, distance } = queue.shift();

      if (visited[row][col]) continue;
      visited[row][col] = true;

      if (row === destination.row && col === destination.col) {
        let current = { row, col };
        const path = [];
        while (current) {
          path.unshift(current);
          current = previous[current.row][current.col];
        }

        for (const node of path) {
          const newGrid = grid.map((gridRow, r) =>
            gridRow.map((cell, c) => {
              if (r === node.row && c === node.col) {
                return { ...cell, isPath: true };
              }
              return cell;
            })
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

      const neighbors = getUnvisitedNeighbors(row, col, visited);
      for (const neighbor of neighbors) {
        const newDistance = distance + 1;
        if (newDistance < distances[neighbor.row][neighbor.col]) {
          distances[neighbor.row][neighbor.col] = newDistance;
          previous[neighbor.row][neighbor.col] = { row, col };
          queue.push({
            row: neighbor.row,
            col: neighbor.col,
            distance: newDistance,
          });

          const newGrid = grid.map((gridRow, r) =>
            gridRow.map((cell, c) => {
              if (r === neighbor.row && c === neighbor.col) {
                return { ...cell, isVisited: true };
              }
              return cell;
            })
          );
          setGrid(newGrid);
          await delay(speed);
        }
      }
    }

    setIsAlgorithmRunning(false);
  };

  const visualizeDijkstra = async () => {
    if (!source || !destination || isAlgorithmRunning) return;
    setIsAlgorithmRunning(true);
    await dijkstra();
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
          onClick={visualizeDijkstra}
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