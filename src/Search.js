import React, { useState, useEffect } from "react";
import WeatherToday from "./WeatherToday";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  useEffect(() => {
    search();
  }, [city]);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "e847656cc28a6e5bb451821d4153d52f";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <section className="Search">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className="field"
            autoFocus="on"
            autoComplete="off"
            onChange={handleCityChange}
          />
          <input type="submit" value="Search" className="search-button" />
          <button className="search-button">Current Location</button>
        </form>
        <WeatherToday data={weatherData} />
        <WeatherForecast
          coordinates={weatherData.coordinates}
          currentIconUrl={weatherData.iconUrl}
        />
      </section>
    );
  } else {
    search();
    return "Loading...";
  }
}
