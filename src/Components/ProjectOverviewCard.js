import React from "react";
import "../Styles/ProjectOverviewCard.css";
import { Button, Card, CardBody, CardFooter, CardHeader, Video } from "grommet";
import { Favorite, ShareOption } from "grommet-icons";
import * as settings from "./Settings";

const ProjectOverview = (props) => {
  const { projectData } = props;
  return (
    <div className="projectWrapper">
      <Card className="projectCard" height="medium" width="medium" background="light-1" elevation="large">
        <CardHeader pad="medium">{projectData.name}</CardHeader>
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
      </Card>
    </div>
  );
};

export default ProjectOverview;
