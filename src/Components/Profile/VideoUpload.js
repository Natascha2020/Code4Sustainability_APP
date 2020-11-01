import React, { useState } from "react";
import { Button } from "grommet";
import axiosInstance from "../../Helpers/axios";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";
import "./VideoUpload.css";

const VideoUpload = (props) => {
  const { updateParentData, setUpdateData } = props;
  const [video, setVideo] = useState();
  const [error, setError] = useState(false);

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setVideo(event.target.files[0]);
  };

  const onClickHandler = async () => {
    const data = new FormData();
    // same name that is requested in req.files at API
    data.append("videoUpload", video);

    try {
      const response = await axiosInstance.post(settings.urlVideos + "/videoUpload", data, {
        // receive two parameter endpoint url ,form data (TO DO: Dynamical ID)
      });
      console.log(response);
      // then print response status
      console.log(response.statusText);

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

        <Button color="#e1b74d" margin="medium" type="submit" onClick={onClickHandler} primary label="Upload video" />
      </div>

      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default VideoUpload;