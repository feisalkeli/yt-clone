import React from "react";

const SearchBar = () => {
  return (
    <div className="hidden md:flex ml-12 h-10">
      <label className="flex items-center h-full rounded-lg bg-white border border-gray-300 px-3">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full outline-none placeholder-gray-500"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="md:w-20 h-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.5 17.5l5 5"
          />
        </svg>
      </label>
    </div>
  );
};

export default SearchBar;
