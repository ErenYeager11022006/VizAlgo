// src/components/MergeSortDescription.js
import React from "react";

const MergeSortDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Merge Sort Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          Merge Sort is a divide-and-conquer sorting algorithm. It works by
          recursively dividing the array into two halves, sorting each half, and
          then merging the sorted halves back together. This process continues
          until the entire list is sorted.
        </p>
        <br />
        <p>
          Merge Sort has a time complexity of O(n log n), making it more
          efficient than other O(n²) sorting algorithms like Bubble Sort and
          Insertion Sort. It is particularly effective for large datasets, but
          it requires additional space for the temporary arrays used during
          merging.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`MergeSort(arr)
  if length(arr) <= 1
    return arr
  mid = length(arr) / 2
  left = MergeSort(arr[0..mid-1])
  right = MergeSort(arr[mid..end])
  return Merge(left, right)

Merge(left, right)
  result = []
  while left and right are not empty
    if left[0] < right[0]
      append left[0] to result
    else
      append right[0] to result
  append remaining elements of left and right to result
  return result`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/3j0SWDX4AtU?si=C9_-_06LBIR9XkPj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/3j0SWDX4AtU/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MergeSortDescription;
