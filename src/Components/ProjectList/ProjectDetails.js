import React from "react";
import { Box, Button, CardBody, Carousel } from "grommet";
import "./ProjectDetails.css";

const ProjectDetails = (props) => {
  const { projectData, onSendInterest, onHandleAcceptance, handleDisplay, onDeleteInterest, onDeleteMatched, typeOfUser, onInterestSent } = props;
  return (
    <div className="detailsBox">
      <CardBody pad="medium">
        <Box height="small">
          <Carousel fill alignSelf="center" className="carousel" margin="small">
            <div className="carouselInput">
              <div className="subtitleCarouselInput">Webpage:</div>
              <br />
              <div>{projectData.webpage}</div>
            </div>

            <div className="carouselInput">
              <div className="subtitleCarouselInput">{projectData.question1}</div>
              <br />
              <div>{projectData.answer1}</div>
            </div>
            <div className="carouselInput">
              <div className="subtitleCarouselInput">{projectData.question2}</div>
              <br />
              <div>{projectData.answer2}</div>
            </div>
            <div className="carouselInput">
              <div className="subtitleCarouselInput">{projectData.question3}</div>
              <br />
              <div>{projectData.answer3}</div>
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
