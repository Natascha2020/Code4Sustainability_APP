import React, { useState, useEffect } from "react";
import "../Styles/SearchBar.css";

const SearchBar = (props) => {
  const { projectData } = props;
  const [inputValue, setInputValue] = useState("");
  const [currentSearch, setCurrentSearch] = useState([]);

  // Search bar functionality I: Grabbing input value of search field
  const handleSearch = (e) => {
    console.log(e.target.value);
    console.log(projectData);
    setInputValue(e.target.value);
  };

  // Search bar functionality II: Filtering pokemon-data in terms of input value and storing in currentSearch
  useEffect(() => {
    const results = projectData.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    setCurrentSearch(results);
    console.log(results);
  }, [projectData, inputValue]);

  return (
    <div>
      <div id="searchWrapper">
        <input id="searchInput" type="text" value={inputValue} onChange={handleSearch} placeholder="Find project" autoComplete="off" />
      </div>
    </div>
  );
};

export default SearchBar;
