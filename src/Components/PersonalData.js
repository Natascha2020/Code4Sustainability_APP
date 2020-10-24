import React, { useEffect, useState } from "react";
import axiosInstance from "./axios";
import VideoUpload from "./VideoUpload";
import ErrorHandler from "./ErrorHandler";
import * as settings from "./Settings";
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
    handleFetch();
  }, [updateData]);

  const handleFetch = async () => {
    try {
      const { data } = await axiosInstance.get(settings.urlUsers);
      setPersonalData(data);
      setUpdateData(false);
      console.log(data);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  const handleData = async (value) => {
    console.log(value);
    console.log("test");
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
