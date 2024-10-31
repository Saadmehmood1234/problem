import axios from "axios";
import { LANGUAGE_VERSIONS } from "./constants";

interface ExecuteCodeResponse {
  language: string;
  version: string;
  run: {
    stdout: string;
    stderr: string;
    output: string;
    code: number;
    signal: string | null;
  };
}

type Language = keyof typeof LANGUAGE_VERSIONS;

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (
  language: Language,
  sourceCode: string
): Promise<ExecuteCodeResponse> => {
  const response = await API.post<ExecuteCodeResponse>("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  return response.data;
};
