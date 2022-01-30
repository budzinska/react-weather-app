import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherDetails from "./WeatherDetails";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  let [weatherData, setWeatherData] = useState(null);

  function showWeather(response) {
    console.log(response.data);
    let data = response.data;
    setWeatherData({
      city: data.name,
      date: new Date(data.dt * 1000),
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      //precipitation: data.precipitation.value,
      wind: data.wind.speed,
      icon: data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "6d0dc84f33996746a53bd0932ee1515d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search city
                "
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherDetails data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
