import React from "react";
import './css/main.css';
import './js/main.js';

const App = () =>{
    return(
        <body>
            <div class="grid-container">
                <header>
                    <h1>Wilkommen zum Beacon Projekt</h1>
                </header>
                <main>
                    <button id="helloButton" onclick="displayGreeting()">Hello Beacon</button>
                    <p id="demo"></p>
                </main>
                <footer>
                    <p>IT Services Espas</p>
                </footer>
            </div>
        </body>

    );
}
export default App;