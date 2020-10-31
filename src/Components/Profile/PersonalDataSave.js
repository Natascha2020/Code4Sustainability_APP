import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helpers/axios";
import VideoUpload from "./VideoUpload";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";
import ProfileDev from "./ProfileDev";
import ProfileProject from "./ProfileDev";
import ProfileCard from "./ProfileCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faKey } from "@fortawesome/free-solid-svg-icons";
import "./PersonalData.css";

const PersonalData = ({ question1Update, answer1Update }) => {
  const [value, setValue] = useState({
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
    const formData = new FormData(e.target);
    const body = {};
    formData.forEach((value, property) => (body[property] = value));
    try {
      const { data } = await axiosInstance.put(settings.urlUsers, value);
      setUpdateData(true);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  const updateQA = () => {
    setValue({ ...value, answer1: answer1Update, question1: question1Update });
  };

  return (
    <div>
      <h2 className="titleProfile">Your profile</h2>
      <div className="profileWrapper">
        <div className="profileForm">
          <form
            action="#"
            method="post"
            /* value={value}
            onChange={(nextValue) => setValue(nextValue)} */
            onReset={() => setValue({ name: "", email: "", webpage: "", location: "" })}
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
                aria-label="name"
                aria-describedby="name"
                onChange={(e) => setValue({ ...value, name: e.target.value })}
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
                aria-label="email"
                aria-describedby="email"
                onChange={(e) => {
                  setValue({ ...value, email: e.target.value });
                }}
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
                aria-label="password"
                aria-describedby="password"
                onChange={(e) => {
                  setValue({ ...value, password: e.target.value });
                }}
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
                aria-describedby="webpage"
                onChange={(e) => {
                  setValue({ ...value, webpage: e.target.value });
                }}
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
                aria-label="location"
                aria-describedby="location"
                onChange={(e) => {
                  setValue({ ...value, location: e.target.value });
                }}
              />
            </div>

            {personalData && !personalData.isEmpty ? (
              personalData.typeOfUser === "Project" ? (
                <ProfileProject data={personalData} />
              ) : (
                <ProfileDev data={personalData} />
              )
            ) : null}

            <VideoUpload />

            <button type="submit" class="btn btn-primary mb-2">
              Update
            </button>
            <button type="reset" label="Reset" class="btn btn-primary mb-2">
              Reset
            </button>
            {/* <Box direction="row" gap="medium">
              <Button type="submit" primary label="Update" />
            </Box> */}
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
