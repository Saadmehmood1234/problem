import { useState } from "react";
import { LANGUAGE_VERSIONS } from "./constants";

type LanguageSelectorProps = {
  language: string;
  onSelect: (lang: string) => void;
};

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "text-blue-400";
const HOVER_BG = "bg-gray-900";

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (lang: string) => {
    onSelect(lang);
    setIsOpen(false);
  };

  return (
    <div className="ml-2 relative">
     <div className="flex items-center gap-2">
     <p className="mb-2 text-lg font-semibold">Language:</p>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {language}
      </button>
     </div>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-[50%] bg-gray-800 rounded-md shadow-lg z-10">
          {languages.map(([lang, version]) => (
            <button
              key={lang}
              className={`block px-4 py-2 text-left w-full rounded-md ${
                lang === language
                  ? `bg-gray-900 ${ACTIVE_COLOR}`
                  : `hover:${HOVER_BG}`
              }`}
              onClick={() => handleClick(lang)}
            >
              {lang}
              <span className="text-gray-400 text-sm ml-2">({version})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
