import "./App.css";
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Amsterdam" />
        <footer>
          This project was coded by Anna Budzińska and it is{" "}
          <a
            href="https://github.com/budzinska/react-weather-app"
            target="_blank"
            rel="noreferrer noopener"
            className="footer-link"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://modest-hugle-380951.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
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
