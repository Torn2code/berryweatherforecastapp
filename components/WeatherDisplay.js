import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  const { temp_c, condition, humidity } = weatherData.current;
  const { name } = weatherData.location;

  return (
    <div className="weather-display">
      <h2 className="city-name">{name}</h2>
      <div className="weather-grid">
        <div className="temperature">{temp_c}°C</div>
        <div className="condition">
          <img
            className="weather-icon"
            src={condition.icon}
            alt={condition.text}
          />
          {condition.text}
        </div>
        <div className="humidity">Humidity: {humidity}%</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
