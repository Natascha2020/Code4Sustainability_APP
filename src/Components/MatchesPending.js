import React, { useEffect, useState } from "react";
import axiosInstance from "./axios";
import ErrorHandler from "./ErrorHandler";
import * as settings from "./Settings";

import "../Styles/MatchesPending.css";

const MatchesPending = () => {
  const [pendingData, setPendingData] = useState([]);
  const [updateData, setUpdateData] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    handleFetch();
  }, [updateData]);

  const handleFetch = async () => {
    try {
      const { data } = await axiosInstance.get(settings.urlUsers + "/getDashBoard");
      data.developers_pending && data.developers_pending.length ? setPendingData(data.developers_pending) : setPendingData(data.projects_pending);
      setUpdateData(true);
      console.log(data);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  return (
    <div>
      <h1>MatchesPending</h1>
      {pendingData && pendingData.length
        ? pendingData.map((element, index) => {
            return <div>{element}</div>;
          })
        : null}
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default MatchesPending;
