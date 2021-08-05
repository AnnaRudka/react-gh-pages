import React, { useState, useEffect } from "react";

import "./style/contacts.css";
import Contact from "./Contact";
import BARNEY from "../images/barnej.jpg";
import LILI from "../images/lilia.jpg";
import MARSHEN from "../images/marshen.jpg";
import ROBIN from "../images/robin.jpg";
import TEODOR from "../images/teodor.jpg";
import UNKNOWN from "../images/unknown.png";
import newContact from "./icons/new.png";

const contacts = [
  {
    id: 1,
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    photo: BARNEY,
  },
  {
    id: 2,
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    photo: ROBIN,
  },
  {
    id: 3,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    photo: UNKNOWN,
  },
  {
    id: 4,
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    photo: LILI,
  },
  {
    id: 5,
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    photo: MARSHEN,
  },
  {
    id: 6,
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    photo: TEODOR,
  },
];

const Contacts = () => {
  const [items, setItems] = useState(contacts);
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(true);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onChangeHandler = (e) => {
    setChecked(e.target.checked);
    const gender = e.target.value;
    if (gender === "male") {
      const filteredContact = contacts.filter((contact) => {
        if (!contact.gender) return true;
        return contact.gender === "female";
      });
      setItems(filteredContact);
    }
    if (gender === "female") {
      const filteredContact = contacts.filter((contact) => {
        if (!contact.gender) return true;
        return contact.gender === "male";
      });
      setItems(filteredContact);
    }
    if (gender === "notSpecifided") {
      const filteredContact = contacts.filter((contact) => {
        return contact.gender === "male" || contact.gender === "female";
      });
      setItems(filteredContact);
    }
  };

  useEffect(() => {
    const filteredContacts = contacts.filter((contact) => {
      return (
        contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
        contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
        contact.phone.includes(search)
      );
    });
    setItems(filteredContacts);
  }, [search]);

  return (
    <div className="container_contacts">
      <div className="contacts-header">
        <div className="search-box">
          <input
            onChange={handleSearchChange}
            placeholder="Search contacts"
            className="search-input"
            type="text"
            id="search"
            value={search}
          ></input>
        </div>
        <div className="checkbox">
          <ul className="ks-cboxtags">
            <li>
              <input
                onChange={onChangeHandler}
                type="checkbox"
                id="checkboxOne"
                value="male"
                checked={checked}
              ></input>
              <label htmlFor="checkboxOne">male</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxTwo"
                value="female"
                onChange={onChangeHandler}
                checked={checked}
              ></input>
              <label htmlFor="checkboxTwo">female</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkboxThree"
                value="notSpecifided"
                onChange={onChangeHandler}
                checked={checked}
              ></input>
              <label htmlFor="checkboxThree">not specifided</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="contacts-content">
        {items.map((contact) => (
          <Contact {...contact} key={contact.id} />
        ))}
      </div>
      <div className="contacts-footer">
        <button>
          <img className="footer-icon" src={newContact} alt="New contact" /> Add
          contact
        </button>
      </div>
    </div>
  );
};

export default Contacts;
