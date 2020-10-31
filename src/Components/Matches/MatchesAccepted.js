import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helpers/axios";
import ProjectOverviewCard from "../ProjectList/ProjectOverviewCard";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";

import "./MatchesAccepted.css";

const MatchesAccepted = () => {
  const [matchedData, setMatchedData] = useState([]);
  const [cards, setCardData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const { data: matchedData } = await axiosInstance.get(settings.urlUsers + "/getDashboard");
        if (matchedData.developers_matched /* && matchedData.developers_matched.length */) {
          const arrayOfComponents = matchedData.developers_matched.map(async (projectId, index) => {
            const { data } = await axiosInstance.get(`${settings.urlUsers}/${projectId}`);
            return data;
            // return <ProjectOverviewCard key={projectId} projectData={data} />;
          });
          const cardData = await Promise.all(arrayOfComponents);
          setCardData(cardData);
        } /* if (matchedData.projects_matched && matchedData.projects_matched.length) */ else {
          const arrayOfComponents = matchedData.projects_matched.map(async (projectId, index) => {
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
  }, [matchedData]);

  console.log(cards);
  return (
    <div>
      <h2 className="titleMatchesAccepted ">Matches accepted</h2>
      {cards && cards.length ? cards.map((card) => <ProjectOverviewCard key={card._id} projectData={card} matched={true} />) : null}

      {/*HERE TO START: if developer, display developer profile card*/}
      {/* {cards && cards.length ? cards.map((card) => <ProfileCard key={card._id} personalData={card} pending={true} />) : null} */}
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default MatchesAccepted;
