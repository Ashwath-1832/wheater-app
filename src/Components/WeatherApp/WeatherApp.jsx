import React from "react";
import "./WeatherApp.css";
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const WeatherApp = () => {
  return (
    <div className="container">
      <div className="topBar">
        <input
          type="text"
          placeholder="Search Location"
          className="cityInput"
        ></input>
        <div className="searchIcon">
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weatherImg">
        <img src={cloud_icon} />
      </div>
      <div className="weatherTemp">24°C</div>
      <div className="weatherLocation">London</div>
      <div className="dataContainer">
        <div className="element">
          <img src={humidity_icon} />
          <div className="data">
            <div className="humidityPercent">64%</div>
            <div className="humidityText">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} />
          <div className="data">
            <div className="windSpeed">64 km/h</div>
            <div className="windSpeedText">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
