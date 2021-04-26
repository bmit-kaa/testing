import './App.css';
import Styling from './Styling.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    
        <Router>
          <div>
            <Navbar bg="light" expand="lg">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/choose">Auswahl</Link>
                </li>
                <li>
                  <Link to ="/Map">Map</Link>
                </li>
              </ul>
            </Navbar>

            <Switch>
              <Route path="/choose">
                <Styling/>
              </Route>
            </Switch>
          </div>
        </Router>

    
  

    
    
  );
}

export default App;
