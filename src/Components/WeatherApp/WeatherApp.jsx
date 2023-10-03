import React from "react";
import "./WeatherApp.css";
import search_icon from "../assets/search.png";

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
    </div>
  );
};

export default WeatherApp;
