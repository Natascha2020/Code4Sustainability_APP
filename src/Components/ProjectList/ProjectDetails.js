import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helpers/axios";
import * as settings from "../../Helpers/Settings";
import ErrorHandler from "../../Helpers/ErrorHandler";
import { Box, Button, CardBody, CardHeader, Carousel } from "grommet";
import "./ProjectDetails.css";

const ProjectDetails = (props) => {
  const { projectData, onSendInterest, onHandleAcceptance, handleDisplay, onDeleteInterest, onDeleteMatched, typeOfUser, onInterestSent } = props;
  console.log(onInterestSent);
  return (
    <div>
      <CardBody pad="medium">
        <Box height="small">
          <Carousel fill alignSelf="center" className="carousel">
            <div className="carouselInput">
              <div>Webpage: {projectData.webpage}</div>
            </div>

            <div className="carouselInput">
              <div>{projectData.question1}</div>
              <div>{projectData.answer1}</div>
            </div>
            <div className="carouselInput">
              <div>{projectData.question2}</div>
              <div>{projectData.answer2}</div>
            </div>
            <div className="carouselInput">
              <div>{projectData.question3}</div>
              <div>{projectData.answer3}</div>
            </div>
            <div className="carouselInput">
              <img alt={`${projectData.name}`} src={`${projectData.image}`} />
            </div>
          </Carousel>
        </Box>
      </CardBody>
      {/*Check if project or developer is in array of pending matches and therefore displayed on pending matches page*/}
      {onDeleteInterest ? (
        <Button
          className="btnCard"
          type="submit"
          margin={{ bottom: "small", horizontal: "small" }}
          primary
          label="Delete interest"
          onClick={() => {
            onDeleteInterest();
            handleDisplay();
          }}
        />
      ) : null}
      {/*Check if projectid is part of pendingMatches-array, and user is a projectowner who can accept developer interest, then accept interest button is displayed*/}
      {onHandleAcceptance && typeOfUser === "Project" ? (
        <Button type="submit" margin={{ bottom: "small", horizontal: "small" }} primary label="Accept interest" onClick={onHandleAcceptance} />
      ) : null}
      {/*Check if projectid is not part of pendingMatches-array, and user is a developer who can send interest to project owner, then send interest button is displayed*/}
      {onSendInterest && typeOfUser === "Developer" && !onInterestSent ? (
        <Button type="submit" margin={{ bottom: "small", horizontal: "small" }} primary label="Send interest" onClick={onSendInterest} />
      ) : null}

      {onInterestSent && typeOfUser === "Developer" ? <div>Match is pending</div> : null}
      {/*Check if project or developer is in array of accepted matches and therefore displayed on accepted matches page*/}
      {onDeleteMatched ? (
        <Button
          className="btnCard"
          type="submit"
          margin={{ bottom: "small", horizontal: "small" }}
          primary
          label="Delete match"
          onClick={onDeleteMatched}
        />
      ) : null}
    </div>
  );
};

export default ProjectDetails;
