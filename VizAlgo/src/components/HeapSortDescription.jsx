// src/components/HeapSortDescription.js
import React from "react";

const HeapSortDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Heap Sort Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          Heap Sort is a comparison-based sorting algorithm that works by
          building a binary heap from the input data. The heap is then used to
          repeatedly extract the maximum (or minimum) element, placing it at the
          end of the list. This process continues until the entire list is
          sorted.
        </p>
        <br />
        <p>
          Heap Sort has a time complexity of O(n log n) and is efficient for
          large datasets. However, it is not a stable sort and requires
          additional space for the heap.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`HeapSort(arr)
  n = length(arr)
  BuildMaxHeap(arr, n)
  for i = n-1 down to 1
    swap arr[0] and arr[i]
    MaxHeapify(arr, 0, i)

BuildMaxHeap(arr, n)
  for i = n/2 - 1 down to 0
    MaxHeapify(arr, i, n)

MaxHeapify(arr, i, n)
  left = 2*i + 1
  right = 2*i + 2
  largest = i
  if left < n and arr[left] > arr[largest]
    largest = left
  if right < n and arr[right] > arr[largest]
    largest = right
  if largest != i
    swap arr[i] and arr[largest]
    MaxHeapify(arr, largest, n)`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/MtQL_ll5KhQ?si=0zyp_WdV68JT5kYf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/MtQL_ll5KhQ/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeapSortDescription;
