import React, { useState, useEffect } from "react";
import axiosInstance from "../../Helpers/axios";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";

const Authenticated = (props) => {
  let { WrappedComponent, withRedirect } = props;
  const [authDone, setAuthDone] = useState({});
  const [idUser, setIdUser] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("");

  //set default redirecting to true and pass as prop
  if (!withRedirect) withRedirect = false;

  useEffect(() => {
    const fetchData = async () => {
      //check if refreshToken is still valid
      try {
        const checkRefreshToken = await axiosInstance.get(settings.urlAuth + "/checkValidity");
        if (checkRefreshToken.status === 401) {
          setAuthDone({ error: true });
        } else {
          setIdUser(checkRefreshToken.data.idUser);
          setAuthDone({
            isAuth: true,
          });
          const result = await axiosInstance.get(`${settings.urlUsers}?currentUser=true`);
          setTypeOfUser(result.data.typeOfUser);
        }
      } catch (error) {
        setAuthDone({ errorMessage: `Error: ${error}` });
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //render secure route if user is authenticated, else redirect to login page
  return (
    <div>
      {authDone.isAuth ? (
        <WrappedComponent idUser={idUser} typeOfUser={typeOfUser} {...props} />
      ) : authDone.errorMessage ? (
        <ErrorHandler errorMessage={authDone.errorMsg} />
      ) : authDone.error ? (
        <ErrorHandler redirectLogin={withRedirect} />
      ) : null}
    </div>
  );
};

export default Authenticated;
