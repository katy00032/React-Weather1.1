import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

export default function WeatherApp() {
  return (
    <div className="container">
      <div className="weather-container">
        <Header />
        <Search defaultCity="Ravensburg" />
        <div>
          <div className="col text-center">
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
      </div>
      <div className="col"></div>
      <Footer />
    </div>
  );
}
