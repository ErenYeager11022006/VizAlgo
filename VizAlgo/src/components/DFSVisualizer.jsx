import React, { useState } from "react";

const GRID_SIZE = 10; // Adjust grid size (NxN)
const DEFAULT_SPEED = 50;

// Utility function to create an empty grid
const createEmptyGrid = () =>
  Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => ({
      isSource: false,
      isDestination: false,
      isObstacle: false,
      isVisited: false,
      isPath: false,
      distance: Infinity, // Dijkstra's algorithm requires distance information
      previous: null, // For reconstructing the shortest path
    }))
  );

export default function DijkstraGridVisualizer() {
  const [grid, setGrid] = useState(createEmptyGrid);
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);
  const [speed, setSpeed] = useState(DEFAULT_SPEED);
  const [clickCount, setClickCount] = useState(0);
  const [isPathFound, setIsPathFound] = useState(false); // Track if the path is found
  const [isAlgorithmRunning, setIsAlgorithmRunning] = useState(false); // Track if the algorithm is running

  const handleCellClick = (row, col) => {
    if (isAlgorithmRunning) return; // Prevent any changes while the algorithm is running

    const newGrid = grid.map((gridRow) =>
      gridRow.map((cell) => ({ ...cell }))
    );

    if (clickCount === 0) {
      // Set source
      newGrid[row][col].isSource = true;
      setSource({ row, col });
    } else if (clickCount === 1) {
      // Set destination
      newGrid[row][col].isDestination = true;
      setDestination({ row, col });
    } else {
      // Toggle obstacle state
      if (newGrid[row][col].isSource || newGrid[row][col].isDestination) {
        return; // Don't allow source or destination to be turned into obstacles
      }
      newGrid[row][col].isObstacle = !newGrid[row][col].isObstacle;
    }

    setClickCount((prev) => (prev === 2 ? prev : prev + 1)); // Increment click count
    setGrid(newGrid);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Dijkstra's algorithm
  const dijkstra = async () => {
    if (!source || !destination || isAlgorithmRunning) return;

    setIsAlgorithmRunning(true); // Disable the button once the algorithm starts

    const visited = Array.from({ length: GRID_SIZE }, () =>
      Array.from({ length: GRID_SIZE }, () => false)
    );
    const queue = []; // Priority queue for Dijkstra's algorithm
    const path = [];

    // Initialize grid with starting conditions
    const newGrid = grid.map((gridRow, r) =>
      gridRow.map((cell, c) => ({
        ...cell,
        distance: r === source.row && c === source.col ? 0 : Infinity, // Set source distance to 0
        previous: null,
      }))
    );
    setGrid(newGrid);

    queue.push({ row: source.row, col: source.col, distance: 0 });

    while (queue.length > 0) {
      // Sort the queue based on the lowest distance
      queue.sort((a, b) => a.distance - b.distance);
      const { row, col, distance } = queue.shift();

      if (visited[row][col]) continue;
      visited[row][col] = true;

      const newGrid = grid.map((gridRow, r) =>
        gridRow.map((cell, c) => {
          if (r === row && c === col) {
            return { ...cell, isVisited: true };
          }
          return cell;
        })
      );
      setGrid(newGrid);

      await delay(speed);

      if (row === destination.row && col === destination.col) {
        // Reconstruct the path by following previous cells
        let current = { row, col };
        while (current) {
          path.push(current);
          current = newGrid[current.row][current.col].previous;
        }
        path.reverse();

        path.forEach(({ row, col }) => {
          newGrid[row][col].isPath = true;
        });
        setGrid(newGrid);
        setIsPathFound(true);
        setIsAlgorithmRunning(false);
        return;
      }

      const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];

      for (const [dr, dc] of directions) {
        const nextRow = row + dr;
        const nextCol = col + dc;

        if (
          nextRow >= 0 &&
          nextCol >= 0 &&
          nextRow < GRID_SIZE &&
          nextCol < GRID_SIZE &&
          !visited[nextRow][nextCol] &&
          !grid[nextRow][nextCol].isObstacle
        ) {
          const newDistance = distance + 1; // Assuming each step has equal cost

          if (newDistance < newGrid[nextRow][nextCol].distance) {
            newGrid[nextRow][nextCol].distance = newDistance;
            newGrid[nextRow][nextCol].previous = { row, col };
            queue.push({ row: nextRow, col: nextCol, distance: newDistance });
          }
        }
      }
    }

    setIsAlgorithmRunning(false);
  };

  const resetGrid = () => {
    setGrid(createEmptyGrid());
    setSource(null);
    setDestination(null);
    setClickCount(0);
    setIsPathFound(false); // Reset the path found state
    setIsAlgorithmRunning(false); // Re-enable the button after reset
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-4 flex space-x-3">
        <button
          onClick={dijkstra}
          disabled={isAlgorithmRunning} // Disable button when algorithm is running
          className="px-4 py-2 bg-blue-500 text-white rounded"
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
              className={`w-8 h-8 border ${
                cell.isSource
                  ? "bg-green-500"
                  : cell.isDestination
                  ? "bg-blue-500"
                  : cell.isObstacle
                  ? "bg-black"
                  : cell.isPath
                  ? "bg-purple-500"
                  : cell.isVisited
                  ? "bg-yellow-300"
                  : "bg-gray-200"
              }`}
            ></div>
          ))
        )}
      </div>
      <div className="mt-4">
        <label htmlFor="speed" className="mr-2">
          Speed:
        </label>
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
