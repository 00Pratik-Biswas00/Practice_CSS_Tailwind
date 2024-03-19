import logo from "./logo.webp";
import "./App.css";
import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DarkMode />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi I am Pratik Biswas. Click on the below link to check my portfolio
          website
        </p>
        <a
          className="App-link"
          href="https://pratikbiswas-2004.web.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          pratikbiswas-2004.web.app
        </a>
      </header>
    </div>
  );
}

export default App;
