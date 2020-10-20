import React, { useState } from "react";
import axios from "axios";

const VideoUpload = () => {
  const [video, setVideo] = useState();

  const onChangeHandler = (event) => {
    console.log(event.target.files[0]);
    setVideo(event.target.files[0]);
  };

  const onClickHandler = () => {
    const data = new FormData();
    // same name that is requested in req.files at API
    data.append("videoUpload", video);
    axios
      .post(`/users/5f89f6c367bb4530a2b923a7/videoUpload`, data, {
        // receive two parameter endpoint url ,form data (TO DO: Dynamical ID)
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
        alert("Video successfully uploaded!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <input type="file" name="sampleFile" onChange={onChangeHandler} />
      <button type="button" onClick={onClickHandler}>
        Upload
      </button>
      <video width="320" height="240" controls>
        <source src="http://localhost:4000/users/Videos/ppvideo.mov" type="video/quicktime" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoUpload;
