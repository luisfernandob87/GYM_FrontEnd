import React from 'react';
import '../CSS/ActivityCard.css';
import { useNavigate } from "react-router";


const ActivityCard = ({ image, title, onClick }) => {

    const navigate = useNavigate();
  
    const handleActivity = () => {
      console.log("Actividad:", title);
      navigate("/actividades");
    };

  return (
    <div className="activities-container">
    <div onClick={handleActivity} className="activities-card">
      <div className="card-content">
        <h2>Actividades</h2>
      </div>
    </div>
  </div>
  );
};

export default ActivityCard;