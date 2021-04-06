import logo from './espasarrow.png';
import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './api/fetchBeacon'

function App() {
  return (
   /*  <div className="grid-container">
                <header>
                    <h1>Wilkommen zum Beacon Projekt</h1>
                </header>
                <main>
                                       
                    <button id="helloButton" onClick={()=>console.log("Hello World")}>Hello Beacon</button>
                    <p id="demo"></p>
                </main>
                <footer>
                    <p>IT Services Espas</p>
                </footer>
            </div>       */
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p></p>
        <button onClick={yeet}>Show Beacons</button>
        <ul className="beacontext">
        <a id="beacon0"></a>
        <a id="beacon1"></a>
        <a id="beacon2"></a>
        <a id="beacon3"></a>
        <a id="beacon4"></a>
        <a id="beacon5"></a>
        </ul>
      </header>
    </div>
  );
}
export default App;