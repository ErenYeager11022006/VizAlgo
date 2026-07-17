import React, { useState, useRef } from "react";

export default function KMPStringMatchingVisualizer() {
  const [text, setText] = useState("ABABDABACDABABCABAB");
  const [pattern, setPattern] = useState("ABABCABAB");
  const [matching, setMatching] = useState(false);
  const [speed, setSpeed] = useState(100); // Default speed set to 100ms
  const [resultMessage, setResultMessage] = useState(""); // New state for result message
  const animations = useRef([]);
  const isReset = useRef(false);

  const cleanupAnimations = () => {
    animations.current.forEach((anim) => clearTimeout(anim));
    animations.current = [];
    const elements = document.querySelectorAll(".text-char, .pattern-char");
    elements.forEach((el) => {
      el.style.backgroundColor = "#41B3A2";
    });
  };

  const delay = (duration) =>
    new Promise((resolve) => {
      const timeout = setTimeout(resolve, duration);
      animations.current.push(timeout);
    });

  const computeLPS = async (pattern) => {
    const lps = Array(pattern.length).fill(0);
    let len = 0;
    let i = 1;

    while (i < pattern.length) {
      if (isReset.current) return null;

      if (pattern[i] === pattern[len]) {
        len++;
        lps[i] = len;
        i++;
      } else {
        if (len !== 0) {
          len = lps[len - 1];
        } else {
          lps[i] = 0;
          i++;
        }
      }
    }
    return lps;
  };

  const kmpSearch = async (text, pattern) => {
    const textElements = document.querySelectorAll(".text-char");
    const patternElements = document.querySelectorAll(".pattern-char");
    
    // Compute LPS array first
    const lps = await computeLPS(pattern);
    if (lps === null) return; // Check if reset occurred during LPS computation
    
    let i = 0; // Index for text
    let j = 0; // Index for pattern
    const matches = [];

    const resetColors = async () => {
      textElements.forEach((el) => {
        if (!matches.includes(parseInt(el.dataset.index))) {
          el.style.backgroundColor = "#41B3A2";
        }
      });
      patternElements.forEach((el) => {
        el.style.backgroundColor = "#41B3A2";
      });
    };

    while (i < text.length) {
      if (isReset.current) return;

      // Highlight current comparison
      await resetColors();
      textElements[i].style.backgroundColor = "#FFD700";
      patternElements[j].style.backgroundColor = "#FFD700";
      await delay(speed);

      if (pattern[j] === text[i]) {
        i++;
        j++;

        if (j === pattern.length) {
          // Pattern found - mark the match
          const matchStart = i - j;
          for (let k = matchStart; k < i; k++) {
            matches.push(k);
            textElements[k].style.backgroundColor = "#32CD32";
          }
          j = lps[j - 1];
          await delay(speed * 2); // Pause to show the match
        }
      } else {
        if (j !== 0) {
          j = lps[j - 1];
        } else {
          i++;
        }
      }
    }

    // Final cleanup
    await resetColors();
    // Keep matches highlighted
    matches.forEach((index) => {
      textElements[index].style.backgroundColor = "#32CD32";
    });

    // Set the result message based on whether we found any matches
    if (matches.length > 0) {
      setResultMessage("Pattern Found!");
    } else {
      setResultMessage("Pattern Not Found!");
    }
  };

  const visualizeKMP = async () => {
    if (!text || !pattern || matching) return;

    setMatching(true);
    isReset.current = false;
    cleanupAnimations();
    setResultMessage(""); // Reset the result message before starting

    try {
      await kmpSearch(text, pattern);
    } finally {
      setMatching(false);
    }
  };

  const handleReset = () => {
    isReset.current = true;
    cleanupAnimations();
    setMatching(false);
    setResultMessage(""); // Reset result message on reset
  };

  return (
    <div className="w-full bg-[#D7C3F1] p-4 flex flex-col items-center justify-center">
      <div className="flex items-center space-x-2 mt-4 mb-2">
        <label htmlFor="text" className="font-medium text-sm">
          Text:
        </label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value.toUpperCase())}
          className="w-48 p-1 text-sm rounded border-2 border-[#0D7C66]"
          disabled={matching}
        />
      </div>

      <div className="flex items-center space-x-2 mb-2">
        <label htmlFor="pattern" className="font-medium text-sm">
          Pattern:
        </label>
        <input
          id="pattern"
          type="text"
          value={pattern}
          onChange={(e) => setPattern(e.target.value.toUpperCase())}
          className="w-48 p-1 text-sm rounded border-2 border-[#0D7C66]"
          disabled={matching}
        />
      </div>

      <div className="flex justify-center items-end space-x-1 w-full h-20 mb-2">
        {text.split("").map((char, index) => (
          <div
            key={index}
            data-index={index}
            className="text-char w-6 bg-[#41B3A2] rounded-t text-center text-white font-bold"
          >
            {char}
          </div>
        ))}
      </div>

      <div className="flex justify-center items-end space-x-1 w-full h-10 mb-4">
        {pattern.split("").map((char, index) => (
          <div
            key={index}
            className="pattern-char w-6 bg-[#41B3A2] rounded-t text-center text-white font-bold"
          >
            {char}
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-2 mb-2">
        <label htmlFor="speed" className="font-medium text-sm">
          Speed:
        </label>
        <input
          id="speed"
          type="range"
          min="100"
          max="1000"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-24"
          disabled={matching}
        />
        <span className="text-sm">{speed} ms</span>
      </div>

      <div className="flex space-x-3">
        <button
          onClick={visualizeKMP}
          className="px-3 py-1 bg-[#0D7C66] text-white text-sm rounded hover:bg-[#41B3A2] transition"
          disabled={matching}
        >
          {matching ? "Matching..." : "Start Matching"}
        </button>
        <button
          onClick={handleReset}
          className="px-3 py-1 bg-[#BDE8CA] text-[#0D7C66] text-sm rounded hover:bg-[#41B3A2] transition"
        >
          Reset
        </button>
      </div>

      {/* Display Result Message */}
      <div className="mt-4 text-lg font-semibold text-[#0D7C66]">
        {resultMessage}
      </div>
    </div>
  );
}
