import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ButtonComponent content={"clicca per fare 1k$"} />
        <ImageComponent src={"https://www.topolino.it/wp-content/uploads/2019/12/pippointera.png"} alt={"kekw"} />
      </header>
    </div>
  );
}
export default App;
