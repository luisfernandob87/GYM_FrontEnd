import React, { useState } from "react";
import "../CSS/Actividades.css";

const Actividades = () => {
  // Datos simulados
  const activities = [
    {
      time: "08:00-08:50",
      title: "DINAMO",
      status: "Finalizada",
      color: "#4CAF50",
      participants: 1,
    },
    {
      time: "09:00-09:50",
      title: "AQUAEROBICS",
      status: "Finalizada",
      color: "#2196F3",
      participants: 2,
    },
    {
      time: "10:30-11:20",
      title: "TOTAL BODY CONDITION",
      status: "Finalizada",
      color: "#2196F3",
      participants: 0,
    },
    {
      time: "11:30-12:15",
      title: "DINAMO HIT",
      status: "Finalizada",
      color: "#F44336",
      participants: 0,
    },
  ];

  const [selectedDate, setSelectedDate] = useState("2025-01-08");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivities = activities.filter((activity) =>
    activity.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="schedule-container">
      <div className="schedule-header">
          <input
            type="text"
            placeholder="Buscar actividad"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="date-picker"
        />
      </div>

      {filteredActivities.map((activity, index) => (
        <div
          key={index}
          className="activity-card"
          style={{ borderLeftColor: activity.color }}
        >
          <div className="activity-details">
            <div className="activity-time">{activity.time}</div>
            <div className="activity-title">{activity.title}</div>
          </div>
          <div className="activity-status">
            <div className="status-text">{activity.status}</div>
            {activity.participants > 0 && (
              <div className="participants">+{activity.participants}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Actividades;
