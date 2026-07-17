// src/components/DepthFirstSearchDescription.js
import React from "react";

const DepthFirstSearchDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Depth First Search (DFS) Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          Depth First Search (DFS) is an algorithm used to traverse or search through a graph or tree. The algorithm starts at the root (or any arbitrary node) and explores as far as possible along each branch before backtracking. DFS uses a stack data structure, either explicitly or through recursion, to keep track of nodes that need to be explored.
        </p>
        <br />
        <p>
          DFS can be used for pathfinding, solving puzzles like mazes, and performing topological sorting. It is typically implemented using a stack or recursion. The time complexity of DFS is O(V + E), where V is the number of vertices and E is the number of edges.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`DFS(graph, start):
  create a stack and push start node onto it
  create a set to store visited nodes
  while stack is not empty:
    node = stack.pop()
    if node is not in visited:
      mark node as visited
      for each neighbor of node:
        if neighbor is not in visited:
          stack.push(neighbor)`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/by93qH4ACxo?si=NnSwodbP4b7CL6jS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/by93qH4ACxo/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DepthFirstSearchDescription;
