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
  const initialState = [true, true, true];
  const [items, setItems] = useState(contacts);
  const [search, setSearch] = useState("");
  const [checked, setChecked] = useState(initialState);
  const genders = ["male", "female", undefined];
  const inputItems = [
    {
      id: "checkboxOne",
      value: "0",
      checked: checked[0],
      labelhtml: "male",
    },
    {
      id: "checkboxTwo",
      value: "1",
      checked: checked[1],
      labelhtml: "female",
    },
    {
      id: "checkboxThree",
      value: "2",
      checked: checked[2],
      labelhtml: "not specifided",
    },
  ];
  const onChangeHandler = (e) => {
    const actualChecked = checked.map((item, index) =>
      index === +e.target.value ? (item = e.target.checked) : item
    );
    setChecked(actualChecked);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const checkedContacts = [];
    checked.forEach((item, index) => {
      if (item) {
        contacts.forEach((contact) => {
          if (contact.gender === genders[index]) {
            checkedContacts.push(contact);
          }
        });
      }
    });
    setItems(checkedContacts);
  }, [checked]);

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
            {inputItems.map((item) => (
              <li key={item.id}>
                <input
                  onChange={onChangeHandler}
                  type="checkbox"
                  id={item.id}
                  value={item.value}
                  checked={item.checked}
                ></input>
                <label htmlFor={item.id}> {item.labelhtml}</label>
              </li>
            ))}
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
