// src/components/DijkstraAlgorithmDescription.js
import React from "react";

const DijkstraAlgorithmDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        Dijkstra's Algorithm Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          Dijkstra's Algorithm is a popular algorithm used to find the shortest
          paths between nodes in a graph, which may represent, for example, road
          networks. It works by selecting the node with the smallest tentative
          distance, exploring its neighbors, and updating their distances. This
          process continues until the algorithm has found the shortest path to
          all nodes or reached the destination node.
        </p>
        <br />
        <p>
          It is particularly useful for finding the shortest path in weighted
          graphs with non-negative edge weights. Dijkstra's Algorithm is widely
          used in networking, map routing, and GPS systems. Its time complexity
          is O(V²) with a simple implementation but can be improved to O(E + V
          log V) using priority queues.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`Dijkstra(graph, start):
  create a priority queue and add start node with distance 0
  set distance of all other nodes to infinity
  while priority queue is not empty:
    node = priority queue.dequeue()
    for each neighbor of node:
      new_dist = distance[node] + edge_weight(node, neighbor)
      if new_dist < distance[neighbor]:
        distance[neighbor] = new_dist
        priority queue.enqueue(neighbor, new_dist)
  return distance`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/bZkzH5x0SKU?si=iwRSWoC5mIjWlpRa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/bZkzH5x0SKU/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DijkstraAlgorithmDescription;
