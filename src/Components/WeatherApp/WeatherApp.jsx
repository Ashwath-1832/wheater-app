import React, { useState } from "react";
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
  let api_key = "d689f8bd9f2ab7b60de04d1f087bfd65";
  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidityPercent");
    const wind = document.getElementsByClassName("windSpeed");
    const temperature = document.getElementsByClassName("weatherTemp");
    const location = document.getElementsByClassName("weatherLocation");

    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temperature[0].innerHTML = Math.floor(data.main.temp) + " °C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud_icon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(drizzle_icon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain_icon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow_icon);
    } else {
      setWicon(clear_icon);
    }
  };

  return (
    <div className="container">
      <div className="topBar">
        <input
          type="text"
          placeholder="Search Location"
          className="cityInput"
        ></input>
        <div
          className="searchIcon"
          onClick={() => {
            {
              search();
            }
          }}
        >
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weatherImg">
        <img src={wicon} />
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
