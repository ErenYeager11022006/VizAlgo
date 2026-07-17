// src/components/KnapsackProblemDescription.js
import React from "react";

const KnapsackProblemDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Knapsack Problem Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          The Knapsack Problem is a combinatorial optimization problem where the goal is to select a subset of items with given weights and values to maximize the total value, subject to a weight limit. There are two main types of Knapsack problems:
          <ul className="list-disc pl-6">
            <li>0/1 Knapsack Problem: Each item can either be included or excluded.</li>
            <li>Fractional Knapsack Problem: Items can be broken into smaller parts and included fractionally.</li>
          </ul>
        </p>
        <br />
        <p>
          The 0/1 Knapsack problem is solved using dynamic programming, with a time complexity of O(nW), where n is the number of items and W is the maximum weight capacity of the knapsack. The algorithm uses a table to store intermediate results, which helps in building up the solution efficiently.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode (0/1 Knapsack):</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`Knapsack(W, wt[], val[], n):
  Create a 2D array dp[][] with dimensions (n+1) x (W+1)
  for i = 0 to n:
    for w = 0 to W:
      if wt[i-1] <= w:
        dp[i][w] = max(dp[i-1][w], dp[i-1][w-wt[i-1]] + val[i-1])
      else:
        dp[i][w] = dp[i-1][w]
  return dp[n][W]`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/cJ21moQpofY?si=CuOnwQ7FHCCZswaZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/cJ21moQpofY/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default KnapsackProblemDescription;
