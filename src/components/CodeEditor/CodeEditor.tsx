import React, { useRef, useState } from "react";
import { Editor, OnMount } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import { CODE_SNIPPETS } from "./constants";

interface CodeSnippets {
  [key: string]: string;
}

const CodeEditor: React.FC = () => {
  const editorRef = useRef<any>(null);
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<string>("javascript");

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language: string) => {
    setLanguage(language);
    setValue((CODE_SNIPPETS as CodeSnippets)[language]);
  };

  return (
    <div className="w-full gap-4 max-md:flex-col flex p-4">
      <div className="md:w-[70%] w-full">
        <div className="mb-4">
          <LanguageSelector language={language} onSelect={onSelect} />
        </div>
        <div className="flex-1 w-full mb-4">
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="70vh"
            theme="vs-dark"
            language={language}
            defaultValue={(CODE_SNIPPETS as CodeSnippets)[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value || "")}
          />
        </div>
      </div>
      <div className="md:w-[30%] w-full">
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default CodeEditor;
