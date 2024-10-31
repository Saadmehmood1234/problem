"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Moon, Sun } from "lucide-react";
import { Problem, ProblemData } from "./ProblemData";
import CommentSection from "./CommentSection";
import Link from "next/link";
const ProblemDetail: React.FC = () => {
  const { id } = useParams();
  const [problem, setProblem] = useState<Problem | undefined>();
  const [showHint, setShowHint] = useState<boolean>(false);
  const [showSolution, setShowSolution] = useState<boolean>(false);

  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof id === "string") {
      const foundProblem = ProblemData.find((p) => p.id === parseInt(id));
      setProblem(foundProblem);
    }
  }, [id]);

  if (!problem) {
    return <p className="text-red-500">Problem not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="lg:text-3xl text-2xl font-bold text-blue-600 mb-4">
          {problem.title}
        </h1>
        <p className="text-gray-700 mb-4">{problem.description}</p>

        <div className="flex flex-col p-4 shadow-inner bg-gray-50/50 rounded-md mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-yellow-500">Hint</h3>
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <p>{showHint ? "Hide" : "Show"}</p>
              {showHint ? (
                <EyeOff className="w-6 h-6 text-blue-500" />
              ) : (
                <Eye className="w-6 h-6 text-blue-500" />
              )}
            </button>
          </div>
          <div>
            {showHint && <p className="text-gray-700 mb-6">{problem.hint}</p>}
          </div>
        </div>

        <div className="flex flex-col p-4 shadow-inner mt-8 bg-gray-50/50 rounded-md mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-green-500">Solution</h3>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-2 focus:outline-none"
            >
              <p>{showSolution ? "Hide" : "Show"}</p>
              {showSolution ? (
                <EyeOff className="w-6 h-6 text-blue-500" />
              ) : (
                <Eye className="w-6 h-6 text-blue-500" />
              )}
            </button>
          </div>
          <div>
            {showSolution && (
              <p className="text-gray-700">{problem.solution}</p>
            )}
          </div>
        </div>
        <div className="flex items-center p-4  mt-4 ">
          <input
            type="checkbox"
            id="completedCheckbox"
            className="mr-3 w-5 h-5  text-green-600 rounded focus:ring-green-500 focus:ring-2"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          />
          <label
            htmlFor="completedCheckbox"
            className="text-lg font-medium text-gray-700 cursor-pointer"
          >
            Mark as Completed
          </label>
        </div>
        <div className="ml-2">
          <Link href="/problems/compiler">
          <button className="md:text-lg sm:text-md  md:p-3 p-2 rounded-md max text-white hover:bg-gray-500 bg-gray-700">
            Get Compiler
          </button></Link>
        </div>
      </div>
      <CommentSection />
    </div>
  );
};

export default ProblemDetail;
