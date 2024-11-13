import React from "react";

const Forecast = ({ forecastData }) => {
  if (!forecastData) return null;

  return (
    <div className="forecast">
      <h3>Forecast</h3>
      <div className="forecast-list">
        {forecastData.forecastday.map((day, index) => (
          <div key={index} className="forecast-day">
            <p>{day.date}</p>
            <p>{day.day.avgtemp_c}°C</p>
            <img src={day.day.condition.icon} alt="forecast condition icon" />
            <p>{day.day.condition.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
