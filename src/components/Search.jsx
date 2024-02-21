import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

function Search({ onSearch, onClear }) {
  const [inputText, setInputText] = useState("");
  const handleSearch = () => {
    onSearch(inputText);
    setInputText("");
  };

  const handleClear = () => {
    onClear();
    setInputText("");
  };
  return (
    <div className="flex justify-center mt-8">
      <input
        type="text"
        placeholder="Search..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="py-1.5 px-2 w-1/3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 rounded-md"
      />
      <button
        onClick={handleSearch}
        className="p-2 px-4 bg-green-800 rounded-md ml-2 text-xl"
      >
        Search
      </button>
      <button
        onClick={handleClear}
        className="p-2 px-4 bg-green-800 rounded-md ml-2 text-xl"
      >
        Clear
      </button>
    </div>
  );
}
// Add prop types for onSearch and onClear
Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};
export default Search;
