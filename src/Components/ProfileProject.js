import React, { useState } from "react";
import axios from "axios";
import VideoUpload from "./VideoUpload";
import { Box, Button, Form, FormField, TextInput } from "grommet";
import { FileUpload } from "primereact/fileupload";
import "../Styles/ProfileProject.css";

const ProfileProject = () => {
  const [value, setValue] = useState({});
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

        <VideoUpload />
        <Box direction="row" gap="medium">
          <Button type="submit" primary label="Submit" />
          <Button type="reset" label="Reset" />
        </Box>
      </Form>
    </div>
  );
};

export default ProfileProject;
