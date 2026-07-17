// src/components/BinarySearchDescription.js
import React from "react";

const BinarySearchDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Binary Search Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          Binary Search is an efficient search algorithm used to find the position of a target value within a sorted array or list. It works by repeatedly dividing the search interval in half. If the target value is less than the middle element, the search continues in the left half; if it's greater, the search continues in the right half. This process is repeated until the target is found or the interval is empty.
        </p>
        <br />
        <p>
          Binary Search is much faster than Linear Search for large datasets, with a time complexity of O(log n), where n is the number of elements. However, it requires that the list be sorted before it can be applied.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`BinarySearch(arr, target):
  low = 0
  high = length(arr) - 1
  while low <= high:
    mid = (low + high) / 2
    if arr[mid] == target:
      return mid
    else if arr[mid] < target:
      low = mid + 1
    else:
      high = mid - 1
  return -1`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/Gt2yBZAhsGM?si=zLnQm0Y2KT97AQLV"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/Gt2yBZAhsGM/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BinarySearchDescription;
