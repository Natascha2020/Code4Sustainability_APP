import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helpers/axios";
import * as settings from "../../Helpers/Settings";
import ErrorHandler from "../../Helpers/ErrorHandler";
import { Box, Button, CardBody, CardHeader, Carousel } from "grommet";
import "./ProjectDetails.css";

const ProjectDetails = (props) => {
  const { projectData, handleDisplay, pending } = props;

  const [updateList, setUpdateList] = useState(false);
  const [projectPending, setProjectPending] = useState([]);
  const [error, setError] = useState("");

  const handleConnect = async (e) => {
    e.preventDefault();
    console.log(projectData);
    console.log(settings.urlDeveloper + "/addProject?user_id_p=" + projectData._id);
    try {
      const { data } = await axiosInstance.put(settings.urlDeveloper + "/addProject?user_id_p=" + projectData._id);
      setProjectPending(data);
      setUpdateList(true);
      console.log(data);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    console.log("Test delete");
    try {
      const { data } = await axiosInstance.put(settings.urlDeveloper + "/deletePendingProject?user_id_p=" + projectData._id);
      setProjectPending(data);
      setUpdateList(true);
      console.log(data);
      console.log("in here");
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
      console.log(data);
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
      {pending ? (
        <Button
          className="btnCard"
          type="submit"
          margin={{ bottom: "small", horizontal: "small" }}
          primary
          label="Delete interest"
          onClick={(e) => {
            handleDelete(e);
          }}
        />
      ) : null}
      {pending && projectData.typeOfUser === "Developer" ? (
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
      ;{error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default ProjectDetails;
