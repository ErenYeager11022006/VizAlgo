import React from "react";
import { Link } from "react-router-dom";
import bubbleSortImg from "../../images/image1.jpg";
import bfsImg from "../../images/image2.jpg";
import dijkstraImg from "../../images/image3.jpg";
import mergeSortImg from "../../images/image4.jpg";

const algorithms = [
  {
    title: "Sorting Algorithms",
    description:
      "Visualize popular sorting algorithms like Bubble Sort, Merge Sort, and more.",
    image: bubbleSortImg,
    algorithms: ["Bubble Sort", "Merge Sort", "Heap Sort", "Counting Sort"],
    link: "/algorithm#sorting",
  },
  {
    title: "Graph Algorithms",
    description:
      "Explore graph algorithms like DFS, BFS, and pathfinding algorithms.",
    image: bfsImg,
    algorithms: ["DFS", "BFS", "Dijkstra's", "A*"],
    link: "/algorithm#graph",
  },
  {
    title: "Pathfinding Algorithms",
    description:
      "Learn about pathfinding algorithms through interactive visualizations.",
    image: dijkstraImg,
    algorithms: ["Dijkstra's", "A*"],
    link: "/algorithm#pathfinding",
  },
  {
    title: "More Sorting Algorithms",
    description:
      "Discover advanced sorting techniques and their implementations.",
    image: mergeSortImg,
    algorithms: ["Merge Sort", "Quick Sort"],
    link: "/algorithm#advanced-sorting",
  },
];

const HomePage = () => {
  return (
    <main className="flex-1 min-w-[400px] bg-[#BDE8CA] py-6 sm:py-12">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Quote Section */}
        <div className="text-center my-6 sm:my-12 max-w-2xl mx-auto bg-white p-4 sm:p-8 rounded-lg shadow-lg">
          <blockquote className="text-xl sm:text-2xl font-extrabold text-[#0D7C66]">
            "Learning is enhanced when visualized, not just observed."
          </blockquote>
        </div>

        {/* Algorithm Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {algorithms.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 flex flex-col h-full"
            >
              <div className="relative h-40">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain bg-gray-100"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#0D7C66] mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.algorithms.map((algo, i) => (
                    <span
                      key={i}
                      className="bg-[#BDE8CA] text-[#0D7C66] px-2 py-1 rounded-full text-xs"
                    >
                      {algo}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Link to="/algorithm">
            <button className="bg-[#495464] text-white py-2 px-6 rounded-full hover:bg-[#BBBFCA] transition-colors duration-300">
              View More
            </button>
          </Link>
        </div>

        {/* New Section for Algorithm Visualization */}
        <div className="bg-white mt-16 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center text-[#0D7C66] mb-6">
            We Help You Visualize Algorithms
          </h2>
          <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Explore and understand complex algorithms with ease. From sorting algorithms to graph algorithms and many more, we provide interactive visualizations to help you learn better.
          </p>

          {/* Visualization Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sorting Algorithms */}
            <div className="bg-[#41B3A2] text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Sorting Algorithms</h3>
              <p className="text-sm">
                Learn how popular sorting algorithms like Quick Sort, Merge Sort, and Bubble Sort work step by step with visual guides.
              </p>
            </div>

            {/* Graph Algorithms */}
            <div className="bg-[#41B3A2] text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Graph Algorithms</h3>
              <p className="text-sm">
                Visualize graph traversal techniques like BFS, DFS, and shortest path algorithms like Dijkstra and A* in action.
              </p>
            </div>

            {/* More Algorithms */}
            <div className="bg-[#41B3A2] text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">And Many More</h3>
              <p className="text-sm">
                From dynamic programming to backtracking, dive deep into the world of algorithms with our interactive visualizations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
