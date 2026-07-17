// src/components/KMPStringMatchingDescription.js
import React from "react";

const KMPStringMatchingDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        KMP String Matching Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          The Knuth-Morris-Pratt (KMP) algorithm is an efficient string matching algorithm that searches for occurrences of a pattern string `P` within a text string `T`. It improves on the brute-force method by avoiding redundant comparisons, using previously gathered information about partial matches.
        </p>
        <br />
        <p>
          The key idea behind KMP is to preprocess the pattern `P` into a "partial match" table (also known as the "prefix function"), which provides information about how much the pattern can be shifted when a mismatch occurs. This allows the search to skip unnecessary checks and efficiently find all occurrences of the pattern.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`KMP Search(T, P):
  m = length(P)
  n = length(T)
  ComputePrefixFunction(P)
  i = 0, j = 0
  while i < n:
    if T[i] == P[j]:
      i++, j++
    if j == m:
      print("Pattern found at index", i - j)
      j = pi[j-1]
    elif i < n and T[i] != P[j]:
      if j != 0:
        j = pi[j-1]
      else:
        i++`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/cH-5KcgUcOE?si=0DnCMh7r8O-ywSlW"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/cH-5KcgUcOE/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default KMPStringMatchingDescription;
