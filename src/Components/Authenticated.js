import React, { useState, useEffect } from "react";
import axiosInstance from "../Helpers/axios";
import ErrorHandler from "../Helpers/ErrorHandler";
import * as settings from "../Helpers/Settings";

const Authenticated = (props) => {
  const { WrappedComponent } = props;
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      //check if refreshToken is still valid
      try {
        const checkRefreshToken = await axiosInstance.get(settings.urlAuth + "/checkValidity");
        if (checkRefreshToken.status === 401) {
          setError(true);
        }
        /*  const checkBlacklist = await axiosInstance.get(settings.urlAuth + "/verifyBlackList");
        if (checkBlacklist.status === 401) {
          setError(true);
        } */
        // const checkRefreshToken = await axiosInstance.get(settings.urlAuth + "/refreshAuth");
        // if (checkRefreshToken.status === 401) {
        //   setError(true);
        // }
      } catch (error) {
        setErrorMsg(`Error: ${error}`);
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {!error && !errorMsg ? <WrappedComponent {...props} /> : null}
      {errorMsg ? <ErrorHandler errorMessage={errorMsg} /> : null}
      {/* {error ? <ErrorHandler redirectLogin={true} /> : null} */}
    </div>
  );
};

export default Authenticated;
