import React, {useState} from 'react';
import ReactDOM from 'react-dom';

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
// functions...