import React, { useState, useEffect } from "react";
import { Form, FormField, Select, TextArea } from "grommet";
import "./ProfileProject.css";

const ProfileProject = ({ parentFormValue, setFormValue, didReset, setReset }) => {
  const [subformValue, setSubformValue] = useState({});

  useEffect(() => {
    console.log(didReset);
    if (didReset) {
      setSubformValue({});
      document.getElementById("projectFormReset").reset();
      setReset(false);
    }
  }, [didReset]);

  return (
    <div className="formProfileProject">
      <h5 className="titleProfileProject">Nice to know about the project:</h5>
      <Form
        id={"projectFormReset"}
        value={() => {
          return subformValue;
        }}
        onChange={(nextValue) => {
          setFormValue({ ...parentFormValue, ...nextValue });
          return setSubformValue(nextValue);
        }}>
        <FormField name="question1" htmlfor="question1">
          <Select
            id="question1"
            name="question1"
            placeholder="Question"
            options={["Sustainability...", "The future...", "This year...", "..."]}></Select>
        </FormField>

        <FormField name="answer1" htmlfor="answer1">
          <TextArea id="answer1" name="answer1" placeholder="Answer"></TextArea>
        </FormField>
        <FormField name="question2" htmlfor="question2">
          <Select
            id="question2"
            name="question2"
            placeholder="Question"
            options={["Our team...", "Important to us...", "We need...", "..."]}></Select>
        </FormField>
        <FormField name="answer2" htmlfor="answer2">
          <TextArea id="answer2" name="answer2" placeholder="Answer" />
        </FormField>
        <FormField name="question3" htmlfor="question3">
          <Select
            id="question3"
            name="question3"
            placeholder="Question"
            options={["This project...", "Our biggest problem..", "The idea is...", "..."]}></Select>
        </FormField>
        <FormField name="answer3" htmlfor="answer3">
          <TextArea id="answer3" name="answer3" placeholder="Answer" />
        </FormField>
      </Form>
    </div>
  );
};

export default ProfileProject;
