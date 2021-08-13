import React from "react";
import "./style/homeComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrinWink } from "@fortawesome/free-solid-svg-icons";

const HomeComponent = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>
            Have fun <FontAwesomeIcon icon={faGrinWink} rotation={90} />
          </h1>
          <span>Made with love by </span>
          <a href="#" className="home-link">
            {" "}
            @AnnaRudka
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
