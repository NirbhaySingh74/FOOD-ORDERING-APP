import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./Search.css";
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
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
      <button onClick={handleClear} className="search-button">
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
