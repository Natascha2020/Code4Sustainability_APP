import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import Authenticated from "./Authenticated";
import { Box, Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import * as settings from "../Helpers/Settings";
import "../Styles/ProjectOverviewCard.css";

const ProjectOverview = (props) => {
  const { projectData, pending, deletePending } = props;

  const [showDetails, setShowDetails] = useState(false);

  const showOverview = () => {
    setShowDetails(false);
  };

  return (
    <div className="projectWrapper">
      <Box height={{ min: "300" }} width="medium" margin="small">
        <Card className="projectCard" height="300" width="medium" background="light-1" elevation="large">
          {showDetails ? (
            <ProjectDetails projectData={projectData} handleDisplay={showOverview} pending={pending} updateList={deletePending} {...props} />
          ) : (
            <div>
              <CardHeader className="cardHeader" pad="small" onClick={() => setShowDetails(true)}>
                {projectData.name}
              </CardHeader>
              <CardBody pad="medium">
                <video width="320" height="240" controls>
                  <source src={`${settings.urlVideos}/${projectData._id}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardBody>
            </div>
          )}
          <CardFooter pad={{ horizontal: "small", vertical: "small" }} background="light-2">
            <Button hoverIndicator>
              <FontAwesomeIcon className="navIcon" icon={faComments} size="2x" />
            </Button>
            <div className="cardLocation">{projectData.location}</div>
            <Button hoverIndicator>
              <FontAwesomeIcon className="navIcon" icon={faShareAlt} size="lg" />{" "}
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </div>
  );
};

export default ProjectOverview;
