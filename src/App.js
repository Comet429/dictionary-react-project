import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="snow" />
        </main>
        <footer className="App-footer">
          <small>
            This project is coded by{" "}
            <a
              href="https://github.com/Comet429"
              target="_blank"
              rel="noreferrer"
            >
              Jessie Polong
            </a>
            , is open-sourced on{" "}
            <a
              href="https://github.com/Comet429/dictionary-react-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://dictionary-project-290bcc.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
            .{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
