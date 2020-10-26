import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Video } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";
import * as settings from "./Settings";
import "../Styles/ProjectOverviewCard.css";

const ProjectOverview = (props) => {
  const { projectData } = props;

  const [showDetails, setShowDetails] = useState(false);

  const showOverview = () => {
    console.log("test");
    setShowDetails(false);
  };

  return (
    <div className="projectWrapper">
      <Box height="medium" width="medium" margin="small">
        <Card className="projectCard" height="medium" width="medium" background="light-1" elevation="large">
          {showDetails ? (
            <ProjectDetails projectData={projectData} handleDisplay={showOverview} />
          ) : (
            <div>
              <CardHeader className="cardHeader" pad="medium" onClick={() => setShowDetails(true)}>
                {projectData.name}{" "}
              </CardHeader>
              <CardBody pad="medium">
                <Video controls="over" fit="cover">
                  <source key="video" src={`${settings.urlUsers}/Videos/${projectData._id}`} type="video/mp4" />
                  {/*  <source key="video" src={`${settings.urlVideos}/${projectData._id}`} type="video/mp4" /> */}
                  <track key="cc" label="English" kind="subtitles" srcLang="en" src="/assets/small-en.vtt" default />
                </Video>
              </CardBody>

              <CardFooter pad={{ horizontal: "small" }} background="light-2">
                <Button icon={<Favorite color="red" />} hoverIndicator />
                <div>{projectData.location}</div>
                <Button icon={<ShareOption color="plain" />} hoverIndicator />
              </CardFooter>
            </div>
          )}
        </Card>
      </Box>
    </div>
  );
};

export default ProjectOverview;
