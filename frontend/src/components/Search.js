import { useState } from 'react';

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex justify-center items-center px-2 py-2 bg-black rounded-full ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="white"
        className="w-5 h-5  cursor-pointer transition ease-in-out delay-50 hover:-translate-y-1  duration-300"
        onClick={handleExpandClick}
        style={{ cursor: 'pointer' }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      {isExpanded && (
        <input
         type="text"
          placeholder="Search"
          className="w-64 px-3 py-2 ml-2 text-white bg-black rounded-md"
          style={{outline:"none"}}
        />
      )}
    </div>
  );
};

export default Search;