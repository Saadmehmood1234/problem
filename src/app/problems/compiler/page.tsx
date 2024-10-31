"use client"
import React from 'react'
import CodeEditor from "@/components//CodeEditor/CodeEditor";
import { useState } from 'react';
import {  Moon, Sun } from "lucide-react";
const Compiler = () => {
    const [showBlack, setShowBlack] = useState<boolean>(true);
  return (
  <>
  
  <div className="flex items-center ml-8 justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-700">Code Compiler</h3>
          <button
            onClick={() => setShowBlack(!showBlack)}
            className="flex items-center gap-2 focus:outline-none"
          >
            {showBlack ? (
              <>
                <Sun className="w-6 h-6 mr-8 text-yellow-500" />
              </>
            ) : (
              <>
                <Moon className="w-6 h-6 mr-8 text-blue-900" />
              </>
            )}
          </button>
        </div> 

         {showBlack ? (
          <div className="bg-black text-gray-500 mx-8 md:p-4 rounded-lg">
            <CodeEditor />
          </div>
        ) : (
          <div className="bg-gray-50/50 text-gray-500 md:p-4 rounded-lg shadow-inner">
            <CodeEditor />
          </div>
        )} 
  </>

  )
}

export default Compiler