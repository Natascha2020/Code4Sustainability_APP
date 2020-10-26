import React, { useEffect, useState } from "react";
import axios from "axios";
import * as settings from "./Settings";
import ErrorHandler from "./ErrorHandler";
import { Button, CardBody, CardHeader, Carousel } from "grommet";
import "../Styles/ProjectDetails.css";

const ProjectDetails = (props) => {
  const { projectData, handleDisplay } = props;

  const [projectPending, setProjectPending] = useState([]);
  const [error, setError] = useState("");

  // Endpoint: PUT "developer/:id/addProject?user_id_p=" - example D1 and P1
  const handleConnect = async (e) => {
    e.preventDefault();
    console.log(settings.urlDeveloper + "/addProject?user_id_p=" + projectData._id);
    try {
      const { data } = await axios.put(settings.urlDeveloper + "/addProject?user_id_p=" + projectData._id);
      setProjectPending(data);
      console.log(data);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  return (
    <div>
      <CardHeader className="cardHeader" pad="medium" onClick={handleDisplay}>
        {projectData.name}{" "}
      </CardHeader>
      <CardBody pad="medium" height="235px">
        <Carousel fill alignSelf="center">
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
          <div className="carouselInput">Image: {projectData.image}</div>
        </Carousel>
      </CardBody>

      <Button
        type="submit"
        primary
        label="Add project"
        onClick={(e) => {
          handleConnect(e);
        }}
      />

      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default ProjectDetails;
