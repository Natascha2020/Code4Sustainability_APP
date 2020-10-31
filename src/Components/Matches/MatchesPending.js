import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helpers/axios";
import ProjectOverviewCard from "../ProjectList/ProjectOverviewCard";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";

import "./MatchesPending.css";

const MatchesPending = (props) => {
  const { idUser, typeOfUser } = props;
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
          console.log("dev", cardData);
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

  console.log(idUser);
  console.log(typeOfUser);

  //delete project from dashboard-array(pending) and (on project detailed card)/will not be displayed on MatchesPending
  const onDeleteInterest = async (card, cardIndex) => {
    try {
      await axiosInstance.put(settings.urlDeveloper + "/deletePendingProject?user_id_p=" + card._id);
      const newState = cards.filter((element, secondIndex) => secondIndex !== cardIndex);
      setCardData([...newState]);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };
  console.log(cards);

  //add developer to accepted matches list, update data and state for matchAccepted
  const handleAcceptance = async (projectId) => {
    try {
      await axiosInstance.put(settings.urlProject + "/acceptDeveloper?user_id_d=" + projectId);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };

  return (
    <div>
      <h2 className="titleMatchesPending">Matches pending</h2>
      {cards && cards.length
        ? cards.map((card, index) => (
            <ProjectOverviewCard
              onDeleteInterest={() => onDeleteInterest(card, index)}
              onHandleAcceptance={() => handleAcceptance(card._id)}
              ey={card._id}
              projectData={card}
            />
          ))
        : null}

      {/*HERE TO START: if developer, display developer profile card*/}
      {/* {cards && cards.length ? cards.map((card) => <ProfileCard key={card._id} personalData={card} pending={true} />) : null} */}
      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default MatchesPending;
