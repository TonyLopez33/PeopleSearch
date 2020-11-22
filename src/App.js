import React from "react";
import "./App.css";
import Nav from "./Nav";
import PeopleList from "./PersonList";
import { PeopleProvider } from "./PeopleContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <PeopleProvider>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/home" component={Home} />
            <Link to="./home">
              <p>Home</p>
            </Link>
          </Switch>
          <header className="App-header">
            <p>People Search</p>
            <a
              className="App-link"
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Teamworks Home Page
            </a>
            <PeopleList />
          </header>
        </div>
      </PeopleProvider>
    </Router>
  );
}

export default App;
