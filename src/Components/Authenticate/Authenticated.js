import React, { useState, useEffect } from "react";
import axiosInstance from "../../Helpers/axios";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";

const Authenticated = (props) => {
  let { WrappedComponent, withRedirect } = props;
  const [authDone, setAuthDone] = useState({});

  if (!withRedirect) withRedirect = true;

  useEffect(() => {
    const fetchData = async () => {
      //check if refreshToken is still valid
      try {
        const checkRefreshToken = await axiosInstance.get(settings.urlAuth + "/checkValidity");
        if (checkRefreshToken.status === 401) {
          setAuthDone({ error: true });
        } else {
          setAuthDone({
            isAuth: true,
          });
        }
      } catch (error) {
        setAuthDone({ errorMessage: `Error: ${error}` });
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log("yith", withRedirect);
  return (
    <div>
      {authDone.isAuth ? (
        <WrappedComponent {...props} />
      ) : authDone.errorMessage ? (
        <ErrorHandler errorMessage={authDone.errorMsg} />
      ) : authDone.error ? (
        <ErrorHandler redirectLogin={withRedirect} />
      ) : null}
    </div>
  );
};

export default Authenticated;
