import React, { useEffect, useState } from "react";
import axiosInstance from "../Helpers/axios";
import VideoUpload from "./VideoUpload";
import ErrorHandler from "../Helpers/ErrorHandler";
import * as settings from "../Helpers/Settings";
import ProfileDev from "./ProfileDev";
import ProfileProject from "./ProfileDev";
import { Box, Button, Form, FormField, TextInput } from "grommet";
import "../Styles/ProfileProject.css";

const PersonalData = () => {
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

  const handleData = async (value) => {
    try {
      const { data } = await axiosInstance.put(settings.urlUsers, value);
      console.log(data);
      setUpdateData(true);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  return (
    <div>
      <Box align="center" pad="large">
        <h3>Update your data</h3>
        <Form
          background
          method="post"
          className="profileForm"
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onReset={() => setValue({ name: "", email: "", webpage: "", location: "" })}
          onSubmit={({ value }) => handleData(value)}>
          <FormField name="name" htmlfor="name" label={personalData.name}>
            <TextInput id="name" name="name" placeholder="Name" />
          </FormField>

          <FormField name="email" htmlfor="email" label={personalData.email}>
            <TextInput id="email" name="email" placeholder="Email" />
          </FormField>

          <FormField name="password" htmlfor="password" label="*Password*">
            <TextInput id="password" name="passworde" placeholder="Password" />
          </FormField>

          <FormField name="location" htmlfor="location" label={personalData.location}>
            <TextInput id="location" name="location" placeholder="Location" />
          </FormField>

          <FormField name="webpage" htmlfor="webpage" label={personalData.webpage}>
            <TextInput id="webpage" name="webpage" placeholder="Webpage" />
          </FormField>

          {personalData && !personalData.isEmpty ? (
            personalData.typeOfUser === "Project" ? (
              <ProfileProject data={personalData} />
            ) : (
              <ProfileDev data={personalData} />
            )
          ) : null}

          <VideoUpload />

          <video width="320" height="240" controls>
            <source src={`${settings.urlVideos}?currentUser=true`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <Box direction="row" gap="medium">
            <Button type="submit" primary label="Update" />
            <Button type="reset" label="Reset" />
          </Box>
        </Form>
      </Box>
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default PersonalData;
