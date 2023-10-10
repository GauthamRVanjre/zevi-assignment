// SuggestionBox.js
import React from "react";

function SuggestionBox() {
  // Replace this with actual trend suggestions
  const trendSuggestions = ["Trend 1", "Trend 2", "Trend 3"];

  return (
    <div className="mt-4 left-0  border border-gray-300 shadow-md text-black">
      <ul className="flex flex-col  bg-white">
        {trendSuggestions.map((suggestion, index) => (
          <li
            className=" p-4 w-[400px] hover:cursor-pointer hover:bg-gray-500"
            key={index}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionBox;
