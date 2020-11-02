import React, { useState, useRef } from "react";
import ProjectDetails from "./ProjectDetails";
import Authenticated from "../Authenticate/Authenticated";
import { Box, Button, Card, CardBody, CardFooter, CardHeader } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faShareAlt } from "@fortawesome/free-solid-svg-icons";
/* import { Overlay, Tooltip } from "react-bootstrap/Overlay"; */
import * as settings from "../../Helpers/Settings";
import "./ProjectOverviewCard.css";

const ProjectOverview = (props) => {
  const { projectData } = props;

  const [showDetails, setShowDetails] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const target = useRef(null);
  const showOverview = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="projectWrapper">
      <Box height={{ min: "300" }} width="medium" margin="small">
        <Card className="projectCard" height="300" width="medium" background="light-1" elevation="large">
          <Authenticated
            WrappedComponent={({ idUser }) => {
              return (
                <CardHeader
                  className="cardHeader"
                  pad="small"
                  onClick={() => {
                    if (idUser && idUser !== "") showOverview();
                    else alert("Please login to see project details");
                  }}>
                  {projectData.name}
                </CardHeader>
              );
            }}
            noCheck={true}
            withRedirect={false}
          />
          {showDetails ? (
            <Authenticated WrappedComponent={ProjectDetails} projectData={projectData} handleDisplay={showOverview} {...props} />
          ) : (
            <div>
              <CardBody pad="medium" className="cardBodyVideo">
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
