import React, { useState } from "react";
import { Form, FormField, Select, TextArea } from "grommet";
import "./ProfileDev.css";

const ProfileDev = ({ parentFormValue, setFormValue }) => {
  const [subformValue, setSubformValue] = useState({});

  return (
    <div className="formProfileDev">
      <h5 className="titleProfileDev">Nice to know about me:</h5>
      <Form
        value={subformValue}
        onChange={(nextValue) => {
          console.log("child state onChange", nextValue);
          setFormValue({ ...parentFormValue, ...nextValue });
          return setSubformValue(nextValue);
        }}>
        <FormField name="question1" htmlfor="question1">
          <Select
            id="question1"
            name="question1"
            placeholder="Question"
            options={["Coding...", "Important to me...", "This year...", "..."]}></Select>
        </FormField>

        <FormField name="answer1" htmlfor="answer1">
          <TextArea id="answer1" name="answer1" placeholder="Answer" />
        </FormField>

        <FormField name="question2" htmlfor="question2">
          <Select
            id="question2"
            name="question2"
            placeholder="Question"
            options={["Sustainability..", "I always wanted...", "About me...", "..."]}></Select>
        </FormField>

        <FormField name="answer2" htmlfor="answer2">
          <TextArea id="answer2" name="answer2" placeholder="Answer" />
        </FormField>

        <FormField name="question3" htmlfor="question3">
          <Select
            id="question3"
            name="question3"
            placeholder="Question"
            options={["Everybody should...", "My best friends...", "The future...", "..."]}></Select>
        </FormField>

        <FormField name="answer3" htmlfor="answer3">
          <TextArea id="answer3" name="answer3" placeholder="Answer" />
        </FormField>
      </Form>
    </div>
  );
};

export default ProfileDev;
