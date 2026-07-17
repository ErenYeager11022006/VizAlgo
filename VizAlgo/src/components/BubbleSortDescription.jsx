// src/components/BubbleSortDescription.js
import React from "react";

const BubbleSortDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Bubble Sort Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          Bubble Sort is a simple sorting algorithm that repeatedly steps
          through the list, comparing adjacent elements and swapping them if
          they are in the wrong order. After each pass, the largest unsorted
          element "bubbles" to the end of the list. The process continues until
          no more swaps are needed, indicating that the list is sorted. 
        </p>
        <br />
        <p>Although
          easy to implement, Bubble Sort is inefficient for large datasets with
          a time complexity of O(n²). However, it can be useful for small lists
          or for educational purposes to understand sorting concepts.</p>
        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`BubbleSort(arr)
  n = length(arr)
  for i = 0 to n-1
    for j = 0 to n-i-2
      if arr[j] > arr[j+1]
        swap arr[j] and arr[j+1]
  return arr`}
        </pre>
        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/Dv4qLJcxus8?si=28vf6_JPxBrFQLFJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/Dv4qLJcxus8/0.jpg
"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BubbleSortDescription;
