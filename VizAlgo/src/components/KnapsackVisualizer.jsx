import React, { useState, useRef, useEffect } from "react";

export default function KnapsackVisualizer() {
  const [values, setValues] = useState([]);
  const [weights, setWeights] = useState([]);
  const [capacity, setCapacity] = useState(15);
  const [currentRow, setCurrentRow] = useState(null);
  const [currentCol, setCurrentCol] = useState(null);
  const [dpTable, setDpTable] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [status, setStatus] = useState("");
  const timeoutRef = useRef(null);

  const generateData = () => {
    if (isRunning) return;

    const n = 3; // Number of items (4-8)
    const newValues = Array.from({ length: n }, () =>
      Math.floor(Math.random() * 20) + 5
    );
    const newWeights = Array.from({ length: n }, () =>
      Math.floor(Math.random() * 10) + 1
    );

    setValues(newValues);
    setWeights(newWeights);
    setDpTable(
      Array(n + 1)
        .fill()
        .map(() => Array(capacity + 1).fill(null))
    );
    setCurrentRow(null);
    setCurrentCol(null);
    setStatus("");
  };

  const startVisualization = () => {
    if (isRunning || !values.length || !weights.length) return;

    setIsRunning(true);
    setCurrentRow(0);
    setCurrentCol(0);
    setStatus("Visualizing...");

    const visualizeStep = (row, col) => {
      if (row > values.length) {
        setIsRunning(false);
        const result = dpTable[values.length][capacity];
        setStatus(`Visualization Complete! Max Value: ${result}`);
        return;
      }

      const newTable = [...dpTable];

      // Fill DP table
      if (row === 0 || col === 0) {
        newTable[row][col] = 0;
      } else {
        const withoutItem = newTable[row - 1][col] || 0;
        const withItem =
          weights[row - 1] <= col
            ? values[row - 1] + (newTable[row - 1][col - weights[row - 1]] || 0)
            : 0;
        newTable[row][col] = Math.max(withoutItem, withItem);
      }

      setDpTable(newTable);
      highlightCell(row, col, "yellow");

      timeoutRef.current = setTimeout(() => {
        resetHighlight(row, col);

        if (col < capacity) {
          setCurrentCol(col + 1);
          visualizeStep(row, col + 1);
        } else {
          setCurrentRow(row + 1);
          setCurrentCol(0);
          visualizeStep(row + 1, 0);
        }
      }, 500);
    };

    visualizeStep(0, 0);
  };

  const handleReset = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    generateData();
    setIsRunning(false);
  };

  const highlightCell = (row, col, color) => {
    const cell = document.getElementById(`cell-${row}-${col}`);
    if (cell) cell.style.backgroundColor = color;
  };

  const resetHighlight = (row, col) => {
    const cell = document.getElementById(`cell-${row}-${col}`);
    if (cell) cell.style.backgroundColor = "#41B3A2";
  };

  const handleCapacityChange = (e) => {
    const value = Math.max(5, Math.min(50, Number(e.target.value)));
    setCapacity(value);
  };

  useEffect(() => {
    generateData();
  }, []);

  return (
    <div className="w-full bg-[#D7C3F1] p-3 flex flex-col items-center justify-center">
  <div className="flex items-center space-x-2 mt-3 mb-2">
    <label htmlFor="capacity" className="font-medium text-xs">
      Capacity:
    </label>
    <input
      id="capacity"
      type="number"
      value={capacity}
      onChange={handleCapacityChange}
      min="5"
      max="20"
      className="w-10 p-1 text-xs rounded border-2 border-[#0D7C66]"
      disabled={isRunning}
    />
    <button
      onClick={generateData}
      className="px-2 py-1 bg-[#0D7C66] text-white text-xs rounded hover:bg-[#41B3A2] transition"
      disabled={isRunning}
    >
      Generate
    </button>
    <button
      onClick={startVisualization}
      className="px-2 py-1 bg-[#0D7C66] text-white text-xs rounded hover:bg-[#41B3A2] transition"
      disabled={isRunning}
    >
      Start
    </button>
    <button
      onClick={handleReset}
      className="px-2 py-1 bg-[#BDE8CA] text-[#0D7C66] text-xs rounded hover:bg-[#41B3A2] transition"
    >
      Reset
    </button>
  </div>

  <div className="flex flex-wrap justify-start items-center gap-2 w-full mb-4">
    {values.map((value, index) => (
      <div
        key={index}
        className="w-10 h-10 bg-[#41B3A2] rounded text-white text-xs flex items-center justify-center font-bold"
      >
        {`V:${value} W:${weights[index]}`}
      </div>
    ))}
  </div>

  <div className="overflow-x-auto w-full mb-4">
    <table className="w-full text-center text-xs">
      <thead>
        <tr>
          <th className="border p-1">Items\Capacity</th>
          {Array.from({ length: capacity + 1 }, (_, i) => (
            <th key={i} className="border p-1">{i}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dpTable.map((row, i) => (
          <tr key={i}>
            <td className="border p-1">{i === 0 ? "0" : i}</td>
            {row.map((cell, j) => (
              <td
                key={j}
                id={`cell-${i}-${j}`}
                className="border p-1 bg-[#41B3A2] text-white"
              >
                {cell !== null ? cell : ""}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="text-xs font-medium text-center mb-2">
    {isRunning && `Processing Row: ${currentRow}, Column: ${currentCol}`}
  </div>
  <div className="text-xs font-medium text-center text-[#FF4500]">{status}</div>
</div>
  )
}
