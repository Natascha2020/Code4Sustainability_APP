import React from "react";
import "../Styles/ProfileDev.css";

const ProfileDev = () => {
  return (
    <div>
      <div className="questionWrapper">
        <label for="questionOne">Nice to know No 1: </label>
        <select name="questionOne" id="questionOne">
          <option selected value="never">
            I have never...
          </option>
          <option value="coding">What I love about coding...</option>
          <option value="sustainability">What I think is important about sustainability...</option>
          <option value="travel">Sea or mountains...</option>
          <option value="joke">Best joke I have ever heard...</option>
          <option value="selfmade">...</option>
        </select>
        <br />
        <textarea className="qTextArea" value="Answer One"></textarea>
      </div>
      <div className="questionWrapper">
        <label for="questionTwo">Nice to know No 2: </label>
        <select name="questionTwo" id="questionTwo">
          <option selected value="wish">
            I wish...
          </option>
          <option value="car">As a car I would be...</option>
          <option value="friend">My best friend...</option>
          <option value="pet">Car or dog...</option>
          <option value="invention">I always wanted to invent...</option>
          <option value="selfmade">...</option>
        </select>
        <br />
        <textarea className="qTextArea" value="Answer One"></textarea>
      </div>
      <div className="questionWrapper">
        <label for="questionTwo">Nice to know No 3: </label>
        <select name="questionThree" id="questionThree">
          <option selected value="important">
            Important to know...
          </option>
          <option value="destination">The best travel destination...</option>
          <option value="sustainability">Saturday night...</option>
          <option value="pet">Everbody should...</option>
          <option value="joke">The future...</option>
          <option value="joke">...</option>
        </select>
        <br />
        <textarea className="qTextArea" value="Answer One"></textarea>
      </div>
    </div>
  );
};

export default ProfileDev;
