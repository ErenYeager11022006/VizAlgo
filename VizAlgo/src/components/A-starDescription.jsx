// src/components/AStarAlgorithmDescription.js
import React from "react";

const AStarAlgorithmDescription = () => {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-[#0D7C66] mb-4">
        A* Algorithm Description
      </h3>

      <div className="text-lg text-gray-700">
        <p>
          A* (A-star) is a popular and efficient pathfinding algorithm used in graphs, combining aspects of both Dijkstra's Algorithm and Greedy Best-First Search. It works by selecting the most promising node based on a heuristic that estimates the cost to reach the goal and the actual cost from the start. This allows A* to find the shortest path to the goal while exploring fewer nodes compared to Dijkstra's algorithm.
        </p>
        <br />
        <p>
          A* is widely used in applications such as GPS systems, robotics, and video games. The algorithm is guaranteed to find the shortest path as long as the heuristic used is admissible (i.e., it never overestimates the cost). Its time complexity is O(E), where E is the number of edges in the graph, though it can vary depending on the heuristic.
        </p>

        <h4 className="font-semibold mt-4">Pseudocode:</h4>
        <pre className="bg-[#f3f4f6] p-4 rounded-md text-sm">
          {`AStar(graph, start, goal):
  create an open list (priority queue) and add start node
  create a closed list to store visited nodes
  set g(start) = 0 and h(start) = heuristic(start, goal)
  while open list is not empty:
    current = node with lowest f = g + h
    if current == goal:
      return the path
    remove current from open list and add to closed list
    for each neighbor of current:
      if neighbor is in closed list:
        continue
      g_new = g[current] + cost(current, neighbor)
      if neighbor is not in open list or g_new < g[neighbor]:
        set g[neighbor] = g_new
        set h[neighbor] = heuristic(neighbor, goal)
        set f[neighbor] = g[neighbor] + h[neighbor]
        add neighbor to open list
  return failure`}
        </pre>

        <div className="flex items-center mt-4">
          <a
            href="https://youtu.be/-L-WgKMFuhE?si=FN9sy_ZrP1zFBHPg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="font-semibold text-black-500 mr-6 hover:underline">
              Video Explanation
            </span>
            <img
              src="https://img.youtube.com/vi/-L-WgKMFuhE/0.jpg"
              alt="Video Thumbnail"
              className="w-48 h-28 rounded-lg cursor-pointer hover:opacity-80"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AStarAlgorithmDescription;
