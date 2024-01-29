import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./WeatherPage.css";
import Search from "./Search";
import WeatherToday from "./WeatherToday";
import Signature from "./Signature";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="WeatherPage">
      <div className="weather-box">
        <Search />
        <WeatherToday />
        <Signature />
      </div>
    </div>
  </StrictMode>
);
