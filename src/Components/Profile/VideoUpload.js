import React, { useState } from "react";
import { Button } from "grommet";
import axiosInstance from "../../Helpers/axios";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";
import "./VideoUpload.css";

const VideoUpload = (props) => {
  const [video, setVideo] = useState();
  const [error, setError] = useState(false);

  const onChangeHandler = (event) => {
    setVideo(event.target.files[0]);
  };

  const onClickHandler = async () => {
    const data = new FormData();
    // same name that is requested in req.files at API
    data.append("videoUpload", video);

    try {
      await axiosInstance.post(settings.urlVideos + "/videoUpload", data, {
        // receive two parameter endpoint url ,form data (TO DO: Dynamical ID)
      });

      alert("Video successfully uploaded!");
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <h5 className="titleVideoUpload">Upload your video pitch (max. 100s):</h5>
        <input className="videoUpload" type="file" name="sampleFile" onChange={onChangeHandler} />
        <span className="buttonVideo">
          <Button color="#e1b74d" margin="medium" type="submit" onClick={onClickHandler} primary label="Upload" />
        </span>
      </div>

      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default VideoUpload;
