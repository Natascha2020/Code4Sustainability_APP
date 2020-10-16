import React from "react";
import "../Styles/ProjectOverviewCard.css";

const ProjectOverview = (props) => {
  const { projectData } = props;
  return (
    <div className="cardPWrapper">
      <div className="cardP">
        <h3 className="cardPName">{projectData.name}</h3>
        <video className="cardPVideo">{projectData.video}</video>
        <div className="cardPLocation">{projectData.location}</div>
      </div>
    </div>
  );
};

export default ProjectOverview;
