import React from 'react';
import '../CSS/ActivityCard.css';

const ActivityCard = ({ image, title, onClick }) => {
  return (
    <div className="activities-container">
    <div className="activities-card">
      <div className="card-content">
        <h2>Actividades</h2>
      </div>
    </div>
  </div>
  );
};

export default ActivityCard;