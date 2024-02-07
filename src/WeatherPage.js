import React from "react";
import "./WeatherPage.css";
import WeatherForecast from "./WeatherForecast";

import Search from "./Search";
import Signature from "./Signature";

export default function WeatherPage(props) {
  return (
    <div className="WeatherPage">
      <div className="weather-box">
        <Search defaultCity="Vancouver" />
        <WeatherForecast />
        <footer>
          <Signature />
        </footer>
      </div>
    </div>
  );
}
