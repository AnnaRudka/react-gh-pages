import React from "react";
import "./app.css";
import { HashRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import Contacts from "./components/Contacts";
import HomeComponent from "./components/HomeComponent";
import Photos from "./components/Photos";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Navlink from "./components/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faClone,
  faCamera,
  faAddressCard,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  {
    id: 2,
    exact: "",
    pass: "/posts",
    icon: <FontAwesomeIcon icon={faClone} />,
    title: "POSTS",
  },
  {
    id: 3,
    exact: "",
    pass: "/photos",
    icon: <FontAwesomeIcon icon={faCamera} />,
    title: "PHOTOS",
  },
  {
    id: 4,
    exact: "",
    pass: "/contacts",
    icon: <FontAwesomeIcon icon={faAddressCard} />,
    title: "CONTACTS",
  },
  {
    id: 5,
    exact: "",
    pass: "/signin",
    icon: <FontAwesomeIcon icon={faUnlockAlt} />,
    title: "SIGN IN",
  },
  {
    id: 6,
    exact: "",
    pass: "/signup",
    icon: <FontAwesomeIcon icon={faUnlockAlt} />,
    title: "SIGN UP",
  },
];

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
          {navLinks.map((navlink) => (
            <Navlink {...navlink} key={navlink.id} />
          ))}
          {/* <NavLink
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
          <NavLink
            to="/signin"
            className="link-item"
            activeClassName="selected"
          >
            <FontAwesomeIcon icon={faUnlockAlt} />
            SIGN IN
          </NavLink>
          <NavLink
            to="/signup"
            className="link-item"
            activeClassName="selected"
          >
            <FontAwesomeIcon icon={faUnlockAlt} />
            SIGN UP
          </NavLink> */}
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
          <Route path="/signin">
            <SignInForm />
          </Route>
          <Route path="/signup">
            <SignUpForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
