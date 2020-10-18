import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, WorldMap } from "grommet";
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
      <Box direction="row" width="large" height="medium" pad="medium">
        <WorldMap
          alignSelf="center"
          color="neutral-1"
          continents={[
            {
              name: "Europe",
              color: "light-5",
              onClick: (name) => {},
            },
          ]}
          onSelectPlace={(lat, lon) => {}}
          places={[
            {
              name: "Hamburg",
              location: [53.550556, 9.993333],
              color: "accent-2",
              /* onClick: (name) => {}, */
            },
          ]}
          selectColor="accent-2"
        />
      </Box>

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
