import React, { useState } from "react";
import "./style/contact-info.css";
import RUDKA_PHOTO from "../images/anna_photo1.jpg";

const ContactInfo = ({ contact }) => {
  const [showInfo, setShowInfo] = useState(true);

  const closeInfoContainer = () => {
    setShowInfo(false);
  };

  return (
    <div className="info-wrapper">
      {!showInfo ? (
        ""
      ) : (
        <div className="info-container">
          <div className="info-list">
            <div className="info">
              <div className="info_name">
                <span className="info-item">Name:</span>
                <span>{contact.firstName}</span>
                <span>{contact.lastName}</span>
              </div>
              <div>
                <span className="info-item">Gender:</span>
                <span className="info-gender">{contact.gender}</span>
              </div>
              <div className="info_phone">
                <span className="info-item">Phone number:</span>
                <span>{contact.phone}</span>
              </div>
            </div>
            <div className="info-chat">
              <div className="message">
                <img className="photo" src={contact.photo} alt="contactImage" />
                <span>So how’s your learning in Cursor going, Anna?</span>
              </div>
              <div className="message">
                <img className="photo" src={RUDKA_PHOTO} alt="contactImage" />
                <span>
                  Couldn’t be better!Thanks for asking, {contact.firstName})
                </span>
              </div>
            </div>
          </div>
          <div className="close-btn">
            <button onClick={closeInfoContainer}>Close chat</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
