import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    onSearch(city);
  };

  return (
    <div className="search-container">
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ position: "relative" }}
      >
        <input
          className="search-input"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <img
          src="https://img.icons8.com/ios/50/search--v1.png"
          alt="search icon"
          className="search-icon"
          onClick={handleSearchClick}
        />
      </form>
    </div>
  );
};

export default Search;
