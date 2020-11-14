import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helpers/axios";
import VideoUpload from "./VideoUpload";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";
import ProfileDev from "./ProfileDev";
import ProfileProject from "./ProfileProject";
import ProfileCard from "./ProfileCard";
import { Box, Button } from "grommet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faKey } from "@fortawesome/free-solid-svg-icons";
import "./PersonalData.css";

const PersonalData = ({ idUser, typeOfUser }) => {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    webpage: "",
    location: "",
    question1: "",
    question2: "",
    question3: "",
    answer1: "",
    answer2: "",
    answer3: "",
    password: "",
  });
  const [didReset, setDidReset] = useState(false);
  const [personalData, setPersonalData] = useState({});
  const [updateData, setUpdateData] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const { data } = await axiosInstance.get(`${settings.urlUsers}?currentUser=true`);
        setPersonalData(data);
        setUpdateData(false);
      } catch (error) {
        let errorMsg = `Error: ${error}`;
        setError(errorMsg);
        console.error(error);
      }
    };
    handleFetch();
  }, [updateData]);

  const handleData = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(settings.urlUsers, formValue);
      setUpdateData(true);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  const inputHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="personalDataBlocker"></div>
      <h2 className="titleProfile">Personal data</h2>
      <div className="profileWrapper">
        <div className="profileForm">
          <form
            action="#"
            method="post"
            onReset={() => {
              setFormValue({
                name: "",
                email: "",
                webpage: "",
                location: "",
                question1: "",
                question2: "",
                question3: "",
                answer1: "",
                answer2: "",
                answer3: "",
                password: "",
              });
              setDidReset(true);
            }}
            onSubmit={(e) => handleData(e)}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text spanProfile" id="name">
                  Name
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                aria-label="name"
                aria-describedby="name"
                onChange={inputHandler}
                value={formValue.name}
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-append">
                <span className="input-group-text spanProfile" id="email">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                aria-label="email"
                aria-describedby="email"
                onChange={inputHandler}
                value={formValue.email}
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text spanProfile" id="password">
                  <FontAwesomeIcon className="navIcon" icon={faKey} size="lg" />
                </span>
              </div>

              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                aria-label="password"
                aria-describedby="password"
                onChange={inputHandler}
                value={formValue.password}
              />
              <div className="input-group-append"></div>
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text spanProfile" id="webpage">
                  https://
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Webpage"
                name="webpage"
                aria-describedby="webpage"
                onChange={inputHandler}
                value={formValue.webpage}
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text spanProfile" id="location">
                  <FontAwesomeIcon className="navIcon" icon={faMapMarkedAlt} size="lg" />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Location"
                name="location"
                aria-label="location"
                aria-describedby="location"
                onChange={inputHandler}
                value={formValue.location}
              />
            </div>

            <VideoUpload />

            {personalData && !personalData.isEmpty ? (
              personalData.typeOfUser === "Project" ? (
                <ProfileProject
                  didReset={didReset}
                  setReset={setDidReset}
                  data={personalData}
                  parentFormValue={formValue}
                  setFormValue={setFormValue}
                />
              ) : (
                <ProfileDev didReset={didReset} setReset={setDidReset} data={personalData} parentFormValue={formValue} setFormValue={setFormValue} />
              )
            ) : null}

            <Box direction="row" gap="medium">
              <Button margin="medium" type="submit" primary label="Update" />
              <Button margin="medium" type="reset" primary label="Reset" />
            </Box>
          </form>
        </div>
        <div className="profileCard">
          <ProfileCard personalData={personalData} videoSrc={`${settings.urlVideos}?currentUser=true&${new Date()}`} />
        </div>
      </div>
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default PersonalData;
