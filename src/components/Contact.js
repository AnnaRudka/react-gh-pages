import telicon from "../images/tel-icon.jpg";

const Contact = (contact) => {
  return (
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
        <img className="icon" src={telicon} alt="icon" />
      </div>
    </div>
  );
};
export default Contact;
