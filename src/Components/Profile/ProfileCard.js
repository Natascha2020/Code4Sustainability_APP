import React from "react";
import * as settings from "../../Helpers/Settings";
import "./ProfileCard.css";

const ProfileCard = (props) => {
  const { personalData } = props;
  return (
    <div className="profileCard">
      <div class="card">
        <video className="videoProfile" width="320" height="240" controls>
          <source src={`${settings.urlVideos}?currentUser=true`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div class="card-body">
          <h4 class="card-title">
            <a>{personalData.name}</a>
          </h4>
          <div class="card-body">
            <h5 class="font-weight-bold indigo-text py-2">{personalData.email}</h5>

            <h6 class="font-weight-bold indigo-text py-2">{personalData.webpage}</h6>
            <h5 class="font-weight-bold indigo-text py-2">{personalData.location}</h5>

            <h5>{personalData.question1}</h5>
            <p class="card-text">{personalData.answer1}</p>

            <h5>{personalData.question2}</h5>
            <p class="card-text">{personalData.answer2}</p>

            <h5>{personalData.question3}</h5>
            <p class="card-text">{personalData.answer3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
