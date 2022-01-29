import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <Weather />
        <footer>
          This project was coded by Anna Budzińska and it is{" "}
          <a
            href="https://github.com/budzinska/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/budzinska/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
