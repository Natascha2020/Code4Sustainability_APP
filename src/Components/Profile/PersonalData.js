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
      const { data } = await axiosInstance.put(settings.urlUsers, formValue);
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

  console.log(idUser, typeOfUser);
  return (
    <div>
      <h2 className="titleProfile">Personal data</h2>
      <div className="profileWrapper">
        <div className="profileForm">
          <form
            action="#"
            method="post"
            onReset={() =>
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
              })
            }
            onSubmit={(e) => handleData(e)}>
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="name">
                  Name
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                name="name"
                aria-label="name"
                aria-describedby="name"
                onChange={inputHandler}
                value={formValue.name}
              />
            </div>

            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text" id="email">
                  @
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                name="email"
                aria-label="email"
                aria-describedby="email"
                onChange={inputHandler}
                value={formValue.email}
              />
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="password">
                  <FontAwesomeIcon className="navIcon" icon={faKey} size="lg" />
                </span>
              </div>

              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
                aria-label="password"
                aria-describedby="password"
                onChange={inputHandler}
                value={formValue.password}
              />
              <div class="input-group-append"></div>
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="webpage">
                  https://
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Webpage"
                name="webpage"
                aria-describedby="webpage"
                onChange={inputHandler}
                value={formValue.webpage}
              />
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="location">
                  <FontAwesomeIcon className="navIcon" icon={faMapMarkedAlt} size="lg" />
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="Location"
                name="location"
                aria-label="location"
                aria-describedby="location"
                onChange={inputHandler}
                value={formValue.location}
              />
            </div>

            <VideoUpload setUpdateData={setUpdateData} updateParentData={updateData} />

            {personalData && !personalData.isEmpty ? (
              personalData.typeOfUser === "Project" ? (
                <ProfileProject data={personalData} parentFormValue={formValue} setFormValue={setFormValue} />
              ) : (
                <ProfileDev data={personalData} parentFormValue={formValue} setFormValue={setFormValue} />
              )
            ) : null}

            <Box direction="row" gap="medium">
              <Button margin="medium" type="submit" primary label="Update" />
              <Button margin="medium" type="reset" primary label="Reset" />
            </Box>
          </form>
        </div>
        <div className="profileCard">
          <ProfileCard personalData={personalData} />
        </div>
      </div>
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default PersonalData;
