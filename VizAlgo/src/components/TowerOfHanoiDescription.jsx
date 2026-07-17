// src/components/TowerOfHanoiDescription.js
import React from "react";

const TowerOfHanoiDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Tower of Hanoi Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          The Tower of Hanoi is a classic problem in computer science and mathematics. The problem involves three rods and a number of disks of different sizes, which can slide onto any rod. The objective is to move the entire stack of disks from one rod to another, subject to the following rules:
          <ul className="list-disc pl-6">
            <li>Only one disk can be moved at a time.</li>
            <li>Each move consists of taking the top disk from one stack and placing it on top of another stack.</li>
            <li>No disk may be placed on top of a smaller disk.</li>
          </ul>
        </p>
        <br />
        <p>
          The minimum number of moves required to solve the Tower of Hanoi problem with `n` disks is `2^n - 1`. It can be solved using recursion, and it helps in understanding the power of recursive algorithms.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`TowerOfHanoi(n, source, destination, auxiliary):
  if n == 1:
    move disk from source to destination
    return
  TowerOfHanoi(n-1, source, auxiliary, destination)
  move disk from source to destination
  TowerOfHanoi(n-1, auxiliary, destination, source)`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/YstLjLCGmgg?si=zbcB3aLwOiLzRn-5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/YstLjLCGmgg/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TowerOfHanoiDescription;
