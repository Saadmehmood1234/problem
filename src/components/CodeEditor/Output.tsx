import React, { useState } from "react";
import { executeCode } from "./api";

// Define the type for the props
interface OutputProps {
  editorRef: React.RefObject<any>;
  language: any;
}

const Output: React.FC<OutputProps> = ({ editorRef, language }) => {
  const [output, setOutput] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const runCode = async () => {
    const sourceCode = editorRef.current?.getValue();
    if (!sourceCode) return;
    try {
      setIsLoading(true);
      const { run: result } = await executeCode(language, sourceCode);
      setOutput(result.output.split("\n"));
      setIsError(!!result.stderr);
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Unable to run code");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full items-center">
    
      <div className="flex gap-4">
      <p className="text-lg font-semibold">Output:</p>
      <button
        className={`bg-green-500 text-white sm:text-xl text-sm px-2  sm:px-4 py-2 rounded-md shadow-md ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
        }`}
        onClick={runCode}
        disabled={isLoading}
      >
        {isLoading ? "Running..." : "Run Code"}
      </button>
  
      </div>
      <div
        className={` mt-3 p-2 border md:h-[70vh] h-[30vh] rounded-md ${
          isError ? "border-red-500 text-red-400" : "border-gray-700"
        }`}
      >
        {output
          ? output.map((line, i) => (
              <p key={i} className="whitespace-pre-wrap">{line}</p>
            ))
          : 'Click "Run Code" to see the output here'}
      </div>
    </div>
  );
};

export default Output;
