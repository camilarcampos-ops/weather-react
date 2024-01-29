import React from "react";
import "./WeatherToday.css";

export default function WeatherToday() {
  return (
    <section className="WeatherToday">
      <div className="title-city-date">
        <h1 id="city">VANCOUVER</h1>
        <h2 id="date">22th January 2023</h2>
      </div>
      <div className="row">
        <div className="col-2 clearfix weather-temperature">
          <img
            className="icon-weather-now"
            src="images/rainy-day.png"
            alt="Weather Icon"
          />
        </div>
        <div className="col-3">
          <span className="weather-now" id="temperature">
            20
          </span>
          <span className="units">
            <a href={""} id="celsius-link" className="active">
              °C
            </a>
            |
            <a href={""} id="fahrenheit-link" className="none">
              °F
            </a>
          </span>
        </div>
        <div className="col-2 weather-details">
          <h3 id="temperature-description"></h3>
          <h3>
            Humidity: <span id="humidity"></span>60%
          </h3>
          <h3>
            Wind: <span id="wind"></span> 15km/h
          </h3>
        </div>
      </div>
    </section>
  );
}
