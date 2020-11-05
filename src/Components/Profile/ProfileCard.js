import React, { useState } from "react";
import * as settings from "../../Helpers/Settings";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const { personalData, videoSrc } = props;

  return (
    <div className="profileCard">
      <div className="card">
        <video className="videoProfile" width="320" height="240" controls key={videoSrc}>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="card-body">
          <h3 className="card-title profileCardTitle">
            <div>{personalData.name}</div>
          </h3>

          <div className="card-body profileCardBody">
            <h4 className="font-weight-bold indigo-text py-2">{personalData.location}</h4>
            <h5 className="font-weight-bold indigo-text py-2">{personalData.email}</h5>

            <h6 className="font-weight-bold indigo-text py-2">{personalData.webpage}</h6>

            <h5 className="profileCardQuestions">{personalData.question1}</h5>
            <p className="card-text">{personalData.answer1}</p>

            <h5 className="profileCardQuestions">{personalData.question2}</h5>
            <p className="card-text">{personalData.answer2}</p>

            <h5 className="profileCardQuestions">{personalData.question3}</h5>
            <p className="card-text">{personalData.answer3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
