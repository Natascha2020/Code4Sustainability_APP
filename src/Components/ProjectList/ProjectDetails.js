import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helpers/axios";
import * as settings from "../../Helpers/Settings";
import ErrorHandler from "../../Helpers/ErrorHandler";
import { Box, Button, CardBody, CardHeader, Carousel } from "grommet";
import "./ProjectDetails.css";

const ProjectDetails = (props) => {
  const { projectData, handleDisplay, pending, matched, onDeleteInterest } = props;

  const [updateList, setUpdateList] = useState(false);
  const [projectPending, setProjectPending] = useState([]);
  const [projectMatched, setProjectMatched] = useState([]);
  const [error, setError] = useState("");

  //add project to dashboard-array and (on project detailed card)/will be displayed on MatchesPending
  const handleConnect = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axiosInstance.put(settings.urlDeveloper + "/addProject?user_id_p=" + projectData._id);
      setProjectPending(data);
      setUpdateList(true);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  //delete project from dashboard-array(matched) and (on project detailed card)/will not be displayed on MatchesAccepted
  const handleDeleteMatched = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.put(settings.urlDeveloper + "/deleteMatchedProject?user_id_p=" + projectData._id);
      setProjectPending(data);
      setUpdateList(true);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  const handleAcceptance = async (e) => {
    e.preventDefault();
    console.log(settings.urlUsers + "/" + projectData._id);
    try {
      const { data } = await axiosInstance.put(settings.urlProject + "/acceptDeveloper?user_id_d=" + projectData._id);
      setProjectPending(data);
      setUpdateList(true);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  return (
    <div>
      <CardHeader className="cardHeader" pad="small" onClick={handleDisplay}>
        {projectData.name}
      </CardHeader>
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
              <img alt={`${projectData.name}`} src={`${projectData.image}`} />{" "}
            </div>
          </Carousel>
        </Box>
      </CardBody>
      {/*Check if projectid is part of pendingMatches-array, then interest was sent and delete interest button is displayed*/}
      {pending ? (
        <Button
          className="btnCard"
          type="submit"
          margin={{ bottom: "small", horizontal: "small" }}
          primary
          label="Delete interest"
          onClick={onDeleteInterest}
        />
      ) : null}
      {/*Check if projectid is part of pendingMatches-array, and user is a projectowner who can accept developer interest, then accept interest button is displayed*/}
      {pending && projectData.typeOfUser === "Developer" && !matched ? (
        <Button
          type="submit"
          margin={{ bottom: "small", horizontal: "small" }}
          primary
          label="Accept interest"
          onClick={(e) => {
            handleAcceptance(e);
          }}
        />
      ) : null}
      {/*Check if projectid is not part of pendingMatches-array, and user is a developer who can send interest to project owner, then send interest button is displayed*/}
      {!pending && projectData.typeOfUser === "Project" ? (
        <Button
          type="submit"
          margin={{ bottom: "small", horizontal: "small" }}
          primary
          label="Send interest"
          onClick={(e) => {
            handleConnect(e);
          }}
        />
      ) : null}
      {matched ? (
        <Button
          className="btnCard"
          type="submit"
          margin={{ bottom: "small", horizontal: "small" }}
          primary
          label="Delete match"
          onClick={(e) => {
            handleDeleteMatched(e);
          }}
        />
      ) : null}
      ;{error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default ProjectDetails;
