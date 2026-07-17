import React, { useState, useRef } from "react";

export default function BinarySearchVisualizer() {
  const [array, setArray] = useState([]);
  const [target, setTarget] = useState(null);
  const [size, setSize] = useState(10);
  const [status, setStatus] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const timeoutRef = useRef(null);

  const generateArray = () => {
    if (isSearching) return;

    const newArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * 100) + 1
    ).sort((a, b) => a - b); // Sort the array for binary search
    setArray(newArray);
    setTarget(null);
    setStatus("");
  };

  const handleSearch = () => {
    if (isSearching || target === null || target === "") return;

    setIsSearching(true);
    setStatus("");

    const searchStep = (low, high) => {
      if (low > high) {
        setStatus("Value Not Found!");
        highlightArray("red");
        setIsSearching(false);
        return;
      }

      const mid = Math.floor((low + high) / 2);
      highlightIndex(mid, "yellow");

      timeoutRef.current = setTimeout(() => {
        if (array[mid] === Number(target)) {
          setStatus("Value Found!");
          highlightIndex(mid, "green");
          setIsSearching(false);
        } else {
          resetHighlight(mid);
          if (array[mid] > Number(target)) {
            searchStep(low, mid - 1);
          } else {
            searchStep(mid + 1, high);
          }
        }
      }, 500);
    };

    searchStep(0, array.length - 1);
  };

  const handleReset = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    generateArray();
    setIsSearching(false);
  };

  const highlightIndex = (index, color) => {
    const box = document.getElementById(`box-${index}`);
    if (box) box.style.backgroundColor = color;
  };

  const resetHighlight = (index) => {
    const box = document.getElementById(`box-${index}`);
    if (box) box.style.backgroundColor = "#41B3A2";
  };

  const highlightArray = (color) => {
    array.forEach((_, index) => highlightIndex(index, color));
  };

  const handleSizeChange = (e) => {
    const value = Math.min(20, Math.max(2, Number(e.target.value))); // Restrict between 2 and 20
    setSize(value);
  };

  return (
    <div className="w-full flex flex-col items-center p-2 sm:p-4">
      <div className="mb-2 sm:mb-4 flex space-x-2 sm:space-x-3">
        <button
          onClick={handleSearch}
          disabled={isSearching || target === null || target === ""}
          className="px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm bg-[#0D7C66] text-white rounded hover:bg-[#41B3A2] transition"
        >
          {isSearching ? "Searching..." : "Search"}
        </button>
        <button
          onClick={handleReset}
          className="px-3 py-1 bg-[#BDE8CA] text-[#0D7C66] text-sm rounded hover:bg-[#41B3A2] transition"
        >
          Reset
        </button>
      </div>

      <div className="flex justify-center items-center space-x-1 sm:space-x-2 w-full h-32 sm:h-40 mb-2">
        {array.map((value, index) => (
          <div
            key={index}
            id={`box-${index}`}
            className="bar w-6 sm:w-8 text-center bg-[#41B3A2] rounded text-white font-bold text-xs sm:text-sm"
            style={{
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="text-sm font-medium text-center mb-2">
        {isSearching && `Searching...`}
      </div>
      <div className="text-sm font-medium text-center text-[#FF4500]">{status}</div>
    </div>
  );
}
