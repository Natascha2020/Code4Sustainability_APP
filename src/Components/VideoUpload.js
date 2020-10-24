import React, { useState } from "react";
import axiosInstance from "./axios";
import * as settings from "./Settings";

const VideoUpload = () => {
  const [video, setVideo] = useState();

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setVideo(event.target.files[0]);
  };

  const onClickHandler = async () => {
    const data = new FormData();
    // same name that is requested in req.files at API
    data.append("videoUpload", video);

    try {
      const response = await axiosInstance.post(settings.urlUsers + "/videoUpload", data, {
        // receive two parameter endpoint url ,form data (TO DO: Dynamical ID)
      });
      // then print response status
      console.log(response.statusText);
      alert("Video successfully uploaded!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <input type="file" name="sampleFile" onChange={onChangeHandler} />
        <button type="button" onClick={onClickHandler}>
          Upload
        </button>
      </div>
      <video width="320" height="240" controls>
        <source src="http://localhost:4000/users/Videos/ppvideo.mov" type="video/quicktime" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoUpload;
