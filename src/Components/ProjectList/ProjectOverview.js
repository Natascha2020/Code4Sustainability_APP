import React, { useState, useEffect } from "react";
import axiosInstance from "../../Helpers/axios";
import ProjectOverviewCard from "./ProjectOverviewCard";
import * as settings from "../../Helpers/Settings";
import ErrorHandler from "../../Helpers/ErrorHandler";
import "./ProjectOverview.css";

const ProjectOverview = (props) => {
  const [allProjects, setAllProjects] = useState([]);
  const [allProjectsMemo, setAllProjectsMemo] = useState([]);
  const [updateProjects, setUpdateProjects] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [projectsLoaded, setProjectsLoaded] = useState(false);

  useEffect(() => {
    handleFetch();
  }, [updateProjects]);

  const handleFetch = async () => {
    try {
      const { data } = await axiosInstance.get(settings.urlUsers + "/projects");
      setAllProjects(data);
      setAllProjectsMemo(data);
      setUpdateProjects(false);
      setProjectsLoaded(true);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  // Search bar functionality I: Grabbing input value of search field
  const handleSearch = (e) => {
    setInputValue(e.target.value);

    if (inputValue.length && e.target.value === "") setAllProjects(allProjectsMemo);
    else {
      const results = allProjects.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setAllProjects(results);
    }
  };

  const handleConnect = async (idProject, projectIndex) => {
    //add project to pending matches list, update data and state for matchPending
    try {
      await axiosInstance.put(settings.urlDeveloper + "/addProject?user_id_p=" + idProject);
      // setOnInterestSent(true);
      let modifiedProject = allProjects[projectIndex];
      modifiedProject.sentInterest = true;
      setAllProjects([...allProjects, modifiedProject]);
      alert("Interest sent, your match is pending!");
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  return (
    <div className="projectPageWrapper">
      <div className="projectBlocker"></div>
      <h2 className="titleProject">Sustainable projects</h2>
      <div id="searchWrapper">
        <input id="searchInput" type="text" value={inputValue} onChange={handleSearch} placeholder="Find project" autoComplete="off" />
      </div>

      {allProjects.length ? (
        allProjects.map((project, index) => {
          let id = project._id;
          return (
            <ProjectOverviewCard
              {...props}
              key={id}
              projectData={project}
              onSendInterest={() => handleConnect(id, index)}
              onInterestSent={project.sentInterest}
            />
          );
        })
      ) : projectsLoaded ? (
        <div className="noProject">No projects available for this search</div>
      ) : null}

      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default ProjectOverview;
