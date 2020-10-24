import React, { useState, useEffect } from "react";
import axiosInstance from "./axios";
import ProjectOverviewCard from "./ProjectOverviewCard";
import * as settings from "./Settings";
import ErrorHandler from "./ErrorHandler";
import SearchBar from "./SearchBar";

const ProjectOverview = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [updateProjects, setUpdateProjects] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [currentSearch, setCurrentSearch] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    handleFetch();
  }, [updateProjects]);

  const handleFetch = async () => {
    try {
      const { data } = await axiosInstance.get(settings.urlUsers + "/projects");
      setAllProjects(data);
      setUpdateProjects(false);
      console.log(data);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  // Search bar functionality I: Grabbing input value of search field
  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  // Search bar functionality II: Filtering pokemon-data in terms of input value and storing in currentSearch
  useEffect(() => {
    const results = allProjects.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    setCurrentSearch(results);
    console.log(results);
  }, [allProjects, inputValue]);

  return (
    <div>
      {allProjects && allProjects.length ? (
        <div id="searchWrapper">
          <input id="searchInput" type="text" value={inputValue} onChange={handleSearch} placeholder="Find project" autoComplete="off" />
        </div>
      ) : null}

      {currentSearch && currentSearch.length
        ? allProjects.map((project, index) => {
            let id = project._id;
            return <ProjectOverviewCard key={id} projectData={project} onClick={(id) => {}} />;
          })
        : null}

      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default ProjectOverview;
