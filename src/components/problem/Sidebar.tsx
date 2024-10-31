"use client";
import { useState } from "react";
import Link from "next/link";
import { ProblemData } from "./ProblemData";

const ProblemList: React.FC = () => {
  const [filter, setFilter] = useState<"All" | "Easy" | "Medium" | "Hard">("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProblems = ProblemData.filter((p) => {
    // Filter by category
    const matchesCategory = filter === "All" || p.category === filter;
    // Filter by search query
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Problem List</h1>

      <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:w-[70%] mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search problems..."
          className="w-full lg:w-[60%] px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 lg:mb-0"
        />
        <div className="flex flex-wrap lg:ml-4 space-x-2">
          <button
            onClick={() => setFilter("All")}
            className={`px-4 py-2 rounded ${
              filter === "All"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Easy")}
            className={`px-4 py-2 rounded ${
              filter === "Easy"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Easy
          </button>
          <button
            onClick={() => setFilter("Medium")}
            className={`px-4 py-2 rounded ${
              filter === "Medium"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Medium
          </button>
          <button
            onClick={() => setFilter("Hard")}
            className={`px-4 py-2 rounded ${
              filter === "Hard"
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Hard
          </button>
        </div>
      </div>

      <ul className="w-full lg:w-[70%] bg-white shadow-lg rounded-lg p-6">
        {filteredProblems.length > 0 ? (
          filteredProblems.map((problem) => (
            <li key={problem.id} className="mb-4 p-4 border-b border-gray-200 hover:bg-gray-50 flex items-center">
              <Link href={`/problems/${problem.id}`} className="block w-full">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-lg font-medium text-blue-600 hover:underline">
                    {problem.title}
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryBgColor(
                      problem.category
                    )}`}
                  >
                    {problem.category}
                  </span>
                  <span
                    className={`ml-2 px-2 py-1 text-xs font-semibold rounded-full ${
                      problem.completed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {problem.completed ? "Completed" : "Not Completed"}
                  </span>
                </div>
                <p className="text-gray-700">{problem.description}</p>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-600 text-center">No problems found for the selected category and search query.</p>
        )}
      </ul>
    </div>
  );
};

const getCategoryBgColor = (category: "Easy" | "Medium" | "Hard") => {
  switch (category) {
    case "Easy":
      return "bg-green-100 text-green-600";
    case "Medium":
      return "bg-yellow-100 text-yellow-600";
    case "Hard":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export default ProblemList;
