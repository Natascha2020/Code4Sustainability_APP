import React, { useEffect, useState } from "react";
import axiosInstance from "../../Helpers/axios";
import ProjectOverviewCard from "../ProjectList/ProjectOverviewCard";
import ErrorHandler from "../../Helpers/ErrorHandler";
import * as settings from "../../Helpers/Settings";

import "./MatchesPending.css";

const MatchesPending = (props) => {
  const { idUser, typeOfUser } = props;
  const [cards, setCardData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    //get dashboard of developer (pending and accepted matches) or project (pending and accepted matches)
    const handleFetch = async () => {
      try {
        const { data: pendingData } = await axiosInstance.get(settings.urlUsers + "/getDashboard");
        if (pendingData.developers_pending) {
          const arrayOfComponents = pendingData.developers_pending.map(async (projectId, index) => {
            const { data } = await axiosInstance.get(`${settings.urlUsers}/${projectId}`);
            return data;
          });
          const cardData = await Promise.all(arrayOfComponents);
          setCardData(cardData);
        } else {
          const arrayOfComponents = pendingData.projects_pending.map(async (projectId, index) => {
            const { data } = await axiosInstance.get(`${settings.urlUsers}/${projectId}`);
            console.log(data);
            return data;
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
  }, []);

  console.log(idUser);
  console.log(typeOfUser);

  //delete project from pending-matches and (on project detailed card)/will not be displayed on MatchesPending
  const onDeleteInterest = async (card, cardIndex) => {
    try {
      typeOfUser === "Project"
        ? await axiosInstance.put(settings.urlProject + "/deletePendingDeveloper?user_id_d=" + card._id)
        : await axiosInstance.put(settings.urlDeveloper + "/deletePendingProject?user_id_p=" + card._id);
      const newState = cards.filter((element, secondIndex) => secondIndex !== cardIndex);
      setCardData([...newState]);
    } catch (error) {
      let errorMsg = `Error: ${error}`;
      setError(errorMsg);
      console.error(error);
    }
  };
  console.log(cards);

  //add developer to accepted matches list and delete view of specific card (deletion of id in ppending-matches is handled serverside)
  const handleAcceptance = async (card, cardIndex) => {
    try {
      await axiosInstance.put(settings.urlProject + "/acceptDeveloper?user_id_d=" + card._id);
      const newState = cards.filter((element, secondIndex) => secondIndex !== cardIndex);
      setCardData([...newState]);
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
              onHandleAcceptance={() => handleAcceptance(card, index)}
              ey={card._id}
              projectData={card}
            />
          ))
        : null}

      {error ? <ErrorHandler errorMessage={error} /> : null}
    </div>
  );
};

export default MatchesPending;
