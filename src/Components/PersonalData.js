import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoUpload from "./VideoUpload";
import ErrorHandler from "./ErrorHandler";
import * as settings from "./Settings";
import ProfileDev from "./ProfileDev";
import ProfileProject from "./ProfileProject";
import { Box, Button, Form, FormField, TextInput } from "grommet";
import "../Styles/ProfileProject.css";

const PersonalData = () => {
  const [value, setValue] = useState({});
  const [personalData, setPersonalData] = useState({});
  const [updateData, setUpdateData] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    handleFetch();
  }, [updateData]);

  const handleFetch = async () => {
    try {
      const { data } = await axios.get(settings.urlUsers, { withCredentials: true });
      setPersonalData(data);
      setUpdateData(false);
      console.log(data);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  return (
    <div>
      <Form
        className="profileForm"
        value={value}
        onChange={(nextValue) => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => {}}>
        <FormField name="name" htmlfor="name" label="Name">
          <TextInput id="name" name="name" placeholder="(User)Name" />
        </FormField>

        <FormField name="email" htmlfor="email" label="Email">
          <TextInput id="email" name="email" placeholder="Email" />
        </FormField>

        <FormField name="location" htmlfor="location" label="Location">
          <TextInput id="location" name="location" placeholder="Location" />
        </FormField>

        <FormField name="webpage" htmlfor="webpage" label="Webpage">
          <TextInput id="webpage" name="webpage" placeholder="Webpage" />
        </FormField>

        {personalData && !personalData.isEmpty ? personalData.typeofUser === "Project" ? <ProfileProject /> : <ProfileDev /> : null}

        <VideoUpload />
        <Box direction="row" gap="medium">
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default PersonalData;
