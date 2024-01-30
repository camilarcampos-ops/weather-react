import React from "react";
import "./WeatherToday.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherToday(props) {
  return (
    <section className="WeatherToday">
      <div className="title-city-date">
        <h1 className="text-capitalize">{props.data.city}</h1>
        <h2>
          <FormattedDate date={props.data.date} />
        </h2>
      </div>
      <div className="row">
        <div className="col-2 clearfix weather-temperature">
          <img
            className="icon-weather-now"
            src={props.data.iconUrl}
            alt="Weather Icon"
          />
        </div>
        <div className="col-3">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-2 weather-details">
          <h3>Humidity: {Math.round(props.data.humidity)} %</h3>
          <h3>Wind: {Math.round(props.data.wind)} km/h</h3>
        </div>
      </div>
    </section>
  );
}
