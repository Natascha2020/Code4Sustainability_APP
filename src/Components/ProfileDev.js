import React from "react";
import { FormField, Select, TextArea } from "grommet";
import "../Styles/ProfileDev.css";

const ProfileDev = (props) => {
  const { data } = props;
  return (
    <div>
      <h4>Nice to know about me:</h4>
      <div>Question 1: {data.question1}</div>
      <div>Answer 2: {data.answer1}</div>
      <FormField name="question1" htmlfor="question1">
        <Select id="question1" name="question1" placeholder="Question" options={["Coding...", "Important to me...", "This year...", "..."]}></Select>
      </FormField>

      <FormField name="answer1" htmlfor="answer1">
        <TextArea id="answer1" name="answer1" placeholder="Answer" />
      </FormField>
      <div>Question 1: {data.question2}</div>
      <div>Answer 2: {data.answer2}</div>

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
      <div>Question 1: {data.questio31}</div>
      <div>Answer 2: {data.answer3}</div>

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
    </div>
  );
};

export default ProfileDev;
