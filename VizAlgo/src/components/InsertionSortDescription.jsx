// src/components/InsertionSortDescription.js
import React from "react";

const InsertionSortDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Insertion Sort Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          Insertion Sort is a simple comparison-based sorting algorithm that
          builds the final sorted array one element at a time. It works by
          repeatedly taking an unsorted element and inserting it into the
          correct position within the sorted part of the list. This process is
          repeated until the entire list is sorted.
        </p>
        <br />
        <p>
          Although it is easy to implement and efficient for small datasets,
          Insertion Sort has a time complexity of O(n²) in the worst case,
          making it inefficient for large datasets. It is often used for sorting
          small arrays or as part of more advanced algorithms.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`InsertionSort(arr)
  n = length(arr)
  for i = 1 to n-1
    key = arr[i]
    j = i-1
    while j >= 0 and arr[j] > key
      arr[j+1] = arr[j]
      j = j-1
    arr[j+1] = key
  return arr`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/8mJ-OhcfpYg?si=sntApRtshZSvOH5N"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/8mJ-OhcfpYg/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default InsertionSortDescription;
