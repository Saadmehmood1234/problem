"use client";
import { useState } from "react";
import Link from "next/link";
import { ProblemData } from "./ProblemData";
import { Check, XCircle ,Search } from "lucide-react";
import Tanimation from "./Tanimation";
const ITEMS_PER_PAGE = 10;

const ProblemList: React.FC = () => {
  const [difficulty, setDifficulty] = useState<
    "All" | "Easy" | "Medium" | "Hard"
  >("All");
  const [status, setStatus] = useState<"All" | "Completed" | "Not Completed">(
    "All"
  );
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] =
    useState<boolean>(false);
  const [isDifficultyDropdownOpen, setIsDifficultyDropdownOpen] =
    useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const filteredProblems = ProblemData.filter((p) => {
    const matchesDifficulty = difficulty === "All" || p.category === difficulty;
    const matchesStatus =
      status === "All" ||
      (status === "Completed" && p.completed) ||
      (status === "Not Completed" && !p.completed);
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDifficulty && matchesStatus && matchesSearch;
  });

  const paginatedProblems = filteredProblems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const totalPages = Math.ceil(filteredProblems.length / ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center p-8">
      {/* <h1 className="text-4xl font-bold text-blue-500 mb-6">Problem List</h1> */}
       <Tanimation/>
       <div className="flex flex-col 2xl:flex-row lg:justify-between w-full 2xl:w-[70%] mb-6">
      <div className="relative w-full 2xl:w-[60%]">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search problems..."
          className="w-full px-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 lg:mb-0"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      </div>
      <div className="flex flex-wrap max-2xl:justify-center max-2xl:items-center max-2xl:mt-4 2xl:ml-4 space-x-2">
        <button className="px-4 py-2 rounded bg-gray-200 text-gray-700">
          JavaScript
        </button>
        <button className="px-4 py-2 rounded bg-gray-200 text-gray-700">
          DSA
        </button>
        <button className="px-4 py-2 rounded bg-gray-200 text-gray-700">
          SQL
        </button>
        <button className="px-4 py-2 rounded bg-gray-200 text-gray-700">
          Others
        </button>
      </div>
    </div>

      <div className="w-full 2xl:w-[70%] bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-4"></div>

        <div className="flex font-bold gap-4 text-gray-600 border-b border-gray-200 pb-2 ml-2 mb-4">
          <div className="flex items-center max-sm:hidden px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Title
          </div>
          <div className="flex-grow">
            <button
              onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md max-sm:text-sm shadow-sm bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Status: {status}
              <span className="ml-2">{isStatusDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {isStatusDropdownOpen && (
              <div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-[200px]">
                <button
                  onClick={() => {
                    setStatus("All");
                    setIsStatusDropdownOpen(false);
                  }}
                  className="block max-sm:text-sm w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  All
                </button>
                <button
                  onClick={() => {
                    setStatus("Completed");
                    setIsStatusDropdownOpen(false);
                  }}
                  className="block max-sm:text-sm w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Completed
                </button>
                <button
                  onClick={() => {
                    setStatus("Not Completed");
                    setIsStatusDropdownOpen(false);
                  }}
                  className="block max-sm:text-sm w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Not Completed
                </button>
              </div>
            )}
          </div>
          <div className="">
            <button
              onClick={() =>
                setIsDifficultyDropdownOpen(!isDifficultyDropdownOpen)
              }
              className="flex items-center px-4 max-sm:text-sm py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Difficulty: {difficulty}
              <span className="ml-2">
                {isDifficultyDropdownOpen ? "▲" : "▼"}
              </span>
            </button>
            {isDifficultyDropdownOpen && (
              <div className="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-[200px]">
                <button
                  onClick={() => {
                    setDifficulty("All");
                    setIsDifficultyDropdownOpen(false);
                  }}
                  className="block max-sm:text-sm w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  All
                </button>
                <button
                  onClick={() => {
                    setDifficulty("Easy");
                    setIsDifficultyDropdownOpen(false);
                  }}
                  className="block max-sm:text-sm w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Easy
                </button>
                <button
                  onClick={() => {
                    setDifficulty("Medium");
                    setIsDifficultyDropdownOpen(false);
                  }}
                  className="block max-sm:text-sm w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Medium
                </button>
                <button
                  onClick={() => {
                    setDifficulty("Hard");
                    setIsDifficultyDropdownOpen(false);
                  }}
                  className="block max-sm:text-sm w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Hard
                </button>
              </div>
            )}
          </div>
        </div>

        <ul>
          {paginatedProblems.length > 0 ? (
            paginatedProblems.map((problem, index) => (
              <li
                key={problem.id}
                className={`mb-4 p-4 border-b border-gray-200 hover:bg-gray-100 shadow-inner rounded-md bg-slate-50/30 flex items-center`}
              >
                <Link href={`/problems/${problem.id}`} className="block w-full">
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <div className="text-lg flex gap-4 font-medium text-blue-500 hover:underline">
                         <span className="text-black">{problem.id}.</span> {problem.title}
                          <div className="w-12 flex items-center justify-center">
                            {problem.completed ? (
                              <Check className="w-6 h-6 text-green-600" />
                            ) : (
                              < XCircle  className="w-6 h-6 text-gray-400" />
                            )}
                          </div>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${getCategoryBgColor(
                            problem.category
                          )}`}
                        >
                          {problem.category}
                        </span>
                      </div>
                      <p className="text-gray-700">{problem.description}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <p className="text-gray-600 text-center">
              No problems found for the selected difficulty, status, and search
              query.
            </p>
          )}
        </ul>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-700 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemList;

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