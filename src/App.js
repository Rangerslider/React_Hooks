import "./assets/Style/App.css";
import Nuri from "./assets/Img/nuri.jpg";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="mahadev" src={Nuri}  alt="Nuri" />
      </header>
        <div className="App-intro">
          <p>
            This is the main repository of the project.Every hook components has
            a unique branch named . just go to the that branch and run it .
          </p>
        </div>
    </div>
  );
}

export default App;