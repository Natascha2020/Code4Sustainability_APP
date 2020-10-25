import React, { useState, useEffect } from "react";
import axiosInstance from "./axios";
import ErrorHandler from "./ErrorHandler";
import * as settings from "./Settings";

const VideoUpload = () => {
  const [video, setVideo] = useState();
  const [videoUrl, setVideoUrl] = useState();
  const [error, setError] = useState(false);
  const [videoUpload, setVideoUpload] = useState(false);

  useEffect(() => {
    showVideo();
  }, [videoUpload]);

  const showVideo = async () => {
    try {
      const { data } = await axiosInstance.get(settings.urlUsers);
      setVideoUrl(data.video);
      setVideoUpload(true);
      console.log(data);
      console.log(data.video);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

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
      setVideoUpload(true);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
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
      {videoUrl && videoUrl.length ? (
        <video width="320" height="240" controls>
          <source src={`${settings.urlUsers}/Videos?currentUser=true`} type="video/mp4" />
          {/*  <source src={`${settings.urlVideos}?currentUser=true`} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>
      ) : null}
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default VideoUpload;
