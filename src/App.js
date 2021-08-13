import React from "react";
import "./app.css";
import { HashRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import Contacts from "./components/Contacts";
import HomeComponent from "./components/HomeComponent";
import Photos from "./components/Photos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClone,
  faCamera,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav-container">
          <NavLink
            exact
            to="/"
            className="link-item"
            activeClassName="selected"
          >
            <FontAwesomeIcon icon={faHome} />
            HOME
          </NavLink>

          <NavLink to="/posts" className="link-item" activeClassName="selected">
            <FontAwesomeIcon icon={faClone} />
            POSTS
          </NavLink>
          <NavLink
            to="/photos"
            className="link-item"
            activeClassName="selected"
          >
            <FontAwesomeIcon icon={faCamera} />
            PHOTOS
          </NavLink>
          <NavLink
            to="/contacts"
            className="link-item"
            activeClassName="selected"
          >
            <FontAwesomeIcon icon={faAddressCard} />
            CONTACTS
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
