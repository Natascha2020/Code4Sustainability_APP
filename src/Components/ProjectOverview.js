import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Box, WorldMap } from "grommet";
import ProjectOverviewCard from "./ProjectOverviewCard";
import * as settings from "./Settings";
import ErrorHandler from "./ErrorHandler";
import ProjectDetails from "./ProjectDetails";
import SearchBar from "./SearchBar";

const ProjectOverview = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [updateProjects, setUpdateProjects] = useState(false);
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [currentSearch, setCurrentSearch] = useState([]);

  useEffect(() => {
    handleFetch();
  }, [updateProjects]);

  const handleFetch = async () => {
    try {
      const { data } = await axios.get(settings.urlUsers + "/projects");
      setAllProjects(data);
      setUpdateProjects(false);
      console.log(data);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  return (
    <div>
      {allProjects && allProjects.length ? <SearchBar projectData={allProjects} /> : null}
      {allProjects && allProjects.length
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
