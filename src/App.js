import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import Forecast from "./components/Forecast";
import Error from "./components/Error";
import "./App.css";

import backgroundImage1 from "./assets/3610831-uhd_3840_2160_30fps.mp4";
import backgroundImage2 from "./assets/12510986_3840_2160_60fps.mp4";
import backgroundVideo3 from "./assets/14094022-uhd_3840_2160_30fps.mp4";
import backgroundVideo4 from "./assets/4664992-uhd_3840_2160_30fps.mp4";
import backgroundVideo5 from "./assets/856572-uhd_3840_2160_25fps.mp4";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentBackground, setCurrentBackground] = useState(0);

  const backgrounds = [
    backgroundImage1,
    backgroundImage2,
    backgroundVideo3,
    backgroundVideo4,
    backgroundVideo5,
  ];

  const fetchWeather = async (city = "Paris") => {
    setLoading(true);
    try {
      // Fetch weather data
      const weatherResponse = await axios.get(
        `https://api.weatherapi.com/v1/current.json`,
        {
          params: { key: process.env.REACT_APP_WEATHER_API_KEY, q: city },
        }
      );
      setWeatherData(weatherResponse.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to fetch data");
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 20000);

    fetchWeather();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="background-container">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`background ${
              currentBackground === index ? "active" : ""
            }`}
            style={{
              backgroundImage: bg.endsWith(".mp4") ? "none" : `url(${bg})`,
            }}
          >
            {bg.endsWith(".mp4") && (
              <video className="background-video" autoPlay muted loop>
                <source src={bg} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
      <div className="content">
        <div className="header-container">
          <img
            className="cloud"
            width="28"
            height="28"
            src="https://img.icons8.com/fluency/48/cloud.png"
            alt="cloud"
          />
          <h1>
            Weather <span className="content-span">Forecast</span>
          </h1>
        </div>
        <Search onSearch={(city) => fetchWeather(city)} />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            {weatherData && <WeatherDisplay weatherData={weatherData} />}
            <Forecast weatherData={weatherData} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
