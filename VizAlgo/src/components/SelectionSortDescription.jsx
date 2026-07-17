// src/components/SelectionSortDescription.js
import React from "react";

const SelectionSortDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Selection Sort Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          Selection Sort is a simple comparison-based sorting algorithm. It
          works by repeatedly finding the smallest (or largest) element from the
          unsorted part of the list and swapping it with the element at the
          beginning (or end) of the sorted part. This process is repeated until
          the entire list is sorted.
        </p>
        <br />
        <p>
          Although Selection Sort has a time complexity of O(n²) and is not
          efficient for large datasets, it has the advantage of making fewer
          swaps compared to other O(n²) algorithms, like Bubble Sort or
          Insertion Sort.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`SelectionSort(arr)
  n = length(arr)
  for i = 0 to n-1
    min_idx = i
    for j = i+1 to n
      if arr[j] < arr[min_idx]
        min_idx = j
    swap arr[i] and arr[min_idx]
  return arr`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/EwjnF7rFLns?si=5TbZyr77QWY1e-f2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/EwjnF7rFLns/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectionSortDescription;
