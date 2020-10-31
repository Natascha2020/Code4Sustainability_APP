import React, { useState, useEffect } from "react";
import axiosInstance from "../../Helpers/axios";
import ProjectOverviewCard from "./ProjectOverviewCard";
import * as settings from "../../Helpers/Settings";
import ErrorHandler from "../../Helpers/ErrorHandler";
import "./ProjectOverview.css";

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
    console.log(e.target.value);
  };

  // Search bar functionality II: Filtering in terms of input value and storing in currentSearch
  useEffect(() => {
    const results = allProjects.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
    setCurrentSearch(results);
  }, [allProjects, inputValue]);

  const handleConnect = async (idProject) => {
    console.log(idProject);
    //add project to pending matches list, update data and state for matchPending
    try {
      await axiosInstance.put(settings.urlDeveloper + "/addProject?user_id_p=" + idProject);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="titleProject">Sustainable projects</h2>
      {allProjects && allProjects.length ? (
        <div id="searchWrapper">
          <input id="searchInput" type="text" value={inputValue} onChange={handleSearch} placeholder="Find project" autoComplete="off" />
        </div>
      ) : null}

      {currentSearch && currentSearch.length
        ? allProjects.map((project, index) => {
            let id = project._id;
            return <ProjectOverviewCard key={id} projectData={project} onSendInterest={() => handleConnect(id)} />;
          })
        : null}

      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default ProjectOverview;
