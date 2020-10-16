import React, { useState, useEffect } from "react";
import axios from "axios";

import ProjectOverviewCard from "./ProjectOverviewCard";
import { urlUsersProjects } from "./Settings";
import ErrorHandler from "./ErrorHandler";

const ProjectOverview = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [updateProjects, setUpdateProjects] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    handleFetch();
  }, [updateProjects]);

  const handleFetch = async () => {
    try {
      const { data } = await axios.get(urlUsersProjects);
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
      {allProjects && allProjects.length
        ? allProjects.map((project, index) => {
            return <ProjectOverviewCard key={project._id} projectData={project} />;
          })
        : null}

      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default ProjectOverview;
