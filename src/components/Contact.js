import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import ContactInfo from "./ContactInfo";
import { Link, Route } from "react-router-dom";

const Contact = (contact) => {
  return (
    <div>
      <Link to={`/contacts/${contact.lastName}`}>
        <div className="contact-item">
          <div className="contact_photo">
            <img className="photo" src={contact.photo} alt="contactImage" />
          </div>
          <div className="contact_info">
            <div className="contact_name">
              <span>{contact.firstName}</span>
              <span>{contact.lastName}</span>
              <span className="contact-gender">{contact.gender}</span>
            </div>
            <div className="contact_phone">
              <span>{contact.phone}</span>
            </div>
          </div>
          <div className="telephone_icon">
            <FontAwesomeIcon icon={faPhone} className="icon" />
          </div>
        </div>
      </Link>
      <Route path={`/contacts/${contact.lastName}`}>
        <ContactInfo contact={contact} />
      </Route>
    </div>
  );
};
export default Contact;
