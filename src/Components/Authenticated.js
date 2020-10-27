import React, { useState, useEffect } from "react";
import axiosInstance from "../Helpers/axios";
import ErrorHandler from "../Helpers/ErrorHandler";
import * as settings from "../Helpers/Settings";

const Authenticated = (wrappedComponent) => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      //check if accessToken is on blacklist
      try {
        const checkBlacklist = await axiosInstance.get(settings.urlAuth + "/verifyBlackList");
        if (checkBlacklist.status === 401) {
          setError(true);
        }
        const checkRefreshToken = await axiosInstance.get(settings.urlAuth + "/refreshAuth");
        if (checkRefreshToken.status === 401) {
          setError(true);
        }
      } catch (error) {
        setErrorMsg(`Error: ${error}`);
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {wrappedComponent}
      {errorMsg ? <ErrorHandler errorMessage={errorMsg} /> : null}
      {error ? <ErrorHandler redirectLogin={true} /> : null}
    </div>
  );
};

export default Authenticated;
