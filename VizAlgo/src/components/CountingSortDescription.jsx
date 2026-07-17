// src/components/CountingSortDescription.js
import React from "react";

const CountingSortDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Counting Sort Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          Counting Sort is a non-comparison-based sorting algorithm that counts
          the occurrences of each element in the input list. The algorithm works
          by creating an auxiliary array where each index represents a value
          from the input array, and the value at each index indicates the
          frequency of that number. It then reconstructs the sorted array based
          on the frequencies.
        </p>
        <br />
        <p>
          Counting Sort is efficient when the range of numbers (k) is not
          significantly larger than the number of elements (n) and has a time
          complexity of O(n + k). However, it is not suitable for sorting
          non-integer data or data with a large range of values.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`CountingSort(arr)
  k = max(arr) // Find the maximum value in arr
  count = array of zeros of size k+1
  for each element in arr
    count[element]++
  for i = 1 to k
    count[i] += count[i-1]
  for i = length(arr) - 1 down to 0
    sortedArr[count[arr[i]] - 1] = arr[i]
    count[arr[i]]--
  return sortedArr`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/7zuGmKfUt7s?si=z-v9yksilLf6bykJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/7zuGmKfUt7s/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CountingSortDescription;
