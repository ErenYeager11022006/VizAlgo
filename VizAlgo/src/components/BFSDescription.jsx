// src/components/BreadthFirstSearchDescription.js
import React from "react";

const BreadthFirstSearchDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Breadth First Search (BFS) Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          Breadth First Search (BFS) is an algorithm used to traverse or search through a graph or tree in a level-wise manner. Starting from the root (or any arbitrary node), BFS explores all the neighbors at the present depth level before moving on to nodes at the next depth level. It uses a queue data structure to keep track of nodes that need to be explored.
        </p>
        <br />
        <p>
          BFS is useful for finding the shortest path in unweighted graphs and for problems that require exploring nodes level by level. Its time complexity is O(V + E), where V is the number of vertices and E is the number of edges.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`BFS(graph, start):
  create a queue and enqueue the start node
  create a set to store visited nodes
  while queue is not empty:
    node = queue.dequeue()
    if node is not in visited:
      mark node as visited
      for each neighbor of node:
        if neighbor is not in visited:
          queue.enqueue(neighbor)`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/7Cox-J7onXw?si=-fsNn9lSoxvqzlPJ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/7Cox-J7onXw/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BreadthFirstSearchDescription;
