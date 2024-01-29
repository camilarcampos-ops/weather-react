import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <section>
        <div className="weather-forecast" id="forecast"></div>
      </section>
    </div>
  );
}
