// src/components/QuickSortDescription.js
import React from "react";

const QuickSortDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Quick Sort Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          Quick Sort is a divide-and-conquer algorithm that works by selecting a
          'pivot' element and partitioning the array around the pivot. The
          elements less than the pivot are placed on one side, and those greater
          than the pivot are placed on the other side. This process is
          recursively applied to both sides.
        </p>
        <br />
        <p>
          Quick Sort is often faster than Merge Sort in practice due to its
          in-place sorting and lower constant factors. Its average time
          complexity is O(n log n), but it can degrade to O(n²) if a poor pivot
          is chosen.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`QuickSort(arr, low, high)
  if low < high
    pivot_index = Partition(arr, low, high)
    QuickSort(arr, low, pivot_index - 1)
    QuickSort(arr, pivot_index + 1, high)

Partition(arr, low, high)
  pivot = arr[high]
  i = low - 1
  for j = low to high - 1
    if arr[j] < pivot
      i++
      swap arr[i] and arr[j]
  swap arr[i+1] and arr[high]
  return i + 1`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/Vtckgz38QHs?si=-bcvSLQDxODO9EcH"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/Vtckgz38QHs/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuickSortDescription;
