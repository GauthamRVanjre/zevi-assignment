// SuggestionBox.js
import React from "react";

interface ShowSuggestionProps {
  onSuggestionSelect: (suggestion: string) => void;
}

const SuggestionBox: React.FC<ShowSuggestionProps> = ({
  onSuggestionSelect,
}) => {
  // Replace this with actual trend suggestions
  const trendSuggestions = ["iPhone", "Perfume", "Book"];

  const handleSuggestionClick = (suggestion: string) => {
    onSuggestionSelect(suggestion);
  };

  return (
    <div className="mt-2 left-0  border border-gray-300 shadow-md text-black">
      <p className="bg-white pl-4">Need Suggestions?</p>
      <ul className="flex flex-col  bg-white">
        {trendSuggestions.map((suggestion, index) => (
          <li
            className=" p-4 w-[400px] hover:cursor-pointer hover:bg-gray-500"
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionBox;
