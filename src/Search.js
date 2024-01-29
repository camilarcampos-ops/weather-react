import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <section className="Search">
      <form id="search-city">
        <input
          type="search"
          placeholder="Enter a city"
          className="field"
          autoFocus
          autoComplete="off"
          id="city-input"
          required
        />
        <input type="submit" value="Search" className="search-button" />
        <button className="search-button" id="currentLocation">
          Current Location
        </button>
      </form>
    </section>
  );
}
