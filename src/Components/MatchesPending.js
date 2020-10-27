import React, { useEffect, useState } from "react";
import axiosInstance from "../Helpers/axios";
import ProjectOverviewCard from "./ProjectOverviewCard";
import ErrorHandler from "../Helpers/ErrorHandler";
import * as settings from "../Helpers/Settings";

import "../Styles/MatchesPending.css";

const MatchesPending = () => {
  const [pendingData, setPendingData] = useState([]);
  const [cards, setCardData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const { data: pendingData } = await axiosInstance.get(settings.urlUsers + "/getDashboard");
        if (pendingData.developers_pending) {
          const arrayOfComponents = pendingData.developers_pending.map(async (projectId, index) => {
            const { data } = await axiosInstance.get(`${settings.urlUsers}/${projectId}`);
            return data;
            // return <ProjectOverviewCard key={projectId} projectData={data} />;
          });
          const cardData = await Promise.all(arrayOfComponents);
          setCardData(cardData);
        } else {
          const arrayOfComponents = pendingData.projects_pending.map(async (projectId, index) => {
            const { data } = await axiosInstance.get(`${settings.urlUsers}/${projectId}`);
            console.log(data);
            return data;
            // return <ProjectOverviewCard key={projectId} projectData={data} />;
          });
          const cardData = await Promise.all(arrayOfComponents);
          setCardData(cardData);
        }
      } catch (error) {
        let errorMsg = `Error: ${error}`;
        setError(errorMsg);
        console.error(error);
      }
    };

    handleFetch();
  }, [pendingData]);

  console.log(cards);
  return (
    <div>
      <h1>MatchesPending</h1>
      {cards && cards.length ? cards.map((card) => <ProjectOverviewCard key={card._id} projectData={card} pending={true} />) : null}

      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default MatchesPending;
