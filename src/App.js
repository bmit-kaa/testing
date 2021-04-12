import logo from './espasarrow.png';
import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {

let htmldeviceid = 0;

var devices = [];

function yeet(){
  fetch('https://api.kontakt.io/device?', {
    headers: {
      'Api-Key': 'nxxuKpSXKLZWEPWZWyeIDblvTsvTYYKA',
      'Accept': 'application/vnd.com.kontakt+json;version=10'
    }
  }).then(response => {
      response.json().then(r => {
        devices = r.devices
        console.log(yeet2())});
        // setState({devices: devices});
  })
}

function yeet2(){
  // console.log(devices[0].uniqueId);
  for (let i = 0; i <= 5; i++){
    htmldeviceid = "beacon" + i.toString(10);
      const outputone = <div>
                          <li>This is device Nr{i} with name: {devices[i].uniqueId} and owner: {devices[i].alias}</li>
                        </div>;
      ReactDOM.render(
        outputone,
        document.getElementById(htmldeviceid)
      );
    }
}

  return (

    <div className="App">
      <header className="App-header">
        <h1>Wilkommen zum Beacon Projekt</h1>
        <img src={logo} className="App-logo" alt="logo" />
        

        <p></p>
        <button id="helloButton" onClick={yeet}>Show Beacons</button>
                    <p id="demo"></p>
        <ul className="beacontext">
          <a id="beacon0"></a>
          <a id="beacon1"></a>
          <a id="beacon2"></a>
          <a id="beacon3"></a>
          <a id="beacon4"></a>
          <a id="beacon5"></a>
        </ul>

      <footer>
        <p>IT Services Espas</p>
      </footer>

      </header>
    </div>

  );
}
export default App;