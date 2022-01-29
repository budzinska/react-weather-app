import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  /*let [city, setCity] = useState();*/
  let [weatherData, setWeatherData] = useState(null);

  function showWeather(response) {
    console.log(response.data);
    let data = response.data;
    setWeatherData({
      city: data.name,
      date: "Wednesday 7:00",
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      precipitation: data.precipitation.value,
      wind: data.wind.speed,
      icon: data.weather[0].icon,
    });
  }

  if (weatherData) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="type"
                className="form-control"
                autoFocus="on"
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
        <h3>{weatherData.city}</h3>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.icon} alt="Snow showers" />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {weatherData.precipitation}mm</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6d0dc84f33996746a53bd0932ee1515d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);

    return "Loading...";
  }
}
