import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import {
  RegistrationForm,
  RegistrationContainer,
  Input,
  CheckboxContainer,
  Checkbox,
  Copyright,
  LogoContainer,
  Button,
  AdditionalQuestions,
  NameForm,
} from "./StyledComponents";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCorrect, setEmailCorrect] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);
  const [firstNameCorrect, setFirstNameCorrect] = useState(false);
  const [lastNameCorrect, setLastNameCorrect] = useState(false);

  const inputNameItems = [
    {
      id: 1,
      value: firstName,
      name: "firstName",
      type: "text",
      placeholder: "First name *",
    },
    {
      id: 2,
      value: lastName,
      name: "lastName",
      type: "text",
      placeholder: "Last name *",
    },
  ];
  const inputItems = [
    {
      id: 3,
      value: email,
      name: "email",
      placeholder: "Email Adress *",
    },
    {
      id: 4,
      value: password,
      name: "password",
      placeholder: "Password *",
    },
  ];

  const onChangeHandler = (e) => {
    switch (e.target.name) {
      case "firstName":
        setFirstName(e.target.value);
        firstNameCorrect
          ? (e.target.style = "border-color: green")
          : (e.target.style = "border-color: red");
        break;
      case "lastName":
        setLastName(e.target.value);
        lastNameCorrect
          ? (e.target.style = "border-color: green")
          : (e.target.style = "border-color: red");
        break;
      case "email":
        setEmail(e.target.value);
        emailCorrect
          ? (e.target.style = "border-color: green")
          : (e.target.style = "border-color: red");
        break;
      case "password":
        setPassword(e.target.value);
        passwordCorrect
          ? (e.target.style = "border-color: green")
          : (e.target.style = "border-color: red");
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    const firstNameRegex = new RegExp(/[^\W\d_]{2,}/);
    firstNameRegex.test(String(firstName).toLowerCase())
      ? setFirstNameCorrect(true)
      : setFirstNameCorrect(false);
  }, [firstName]);

  useEffect(() => {
    const lastNameRegex = new RegExp(/[^\W\d_]{2,}/);
    lastNameRegex.test(String(lastName).toLowerCase())
      ? setLastNameCorrect(true)
      : setLastNameCorrect(false);
  }, [lastName]);

  useEffect(() => {
    const emailRegex = new RegExp(/^\S{3,}@\S{2,}\.\D{2,}/);
    emailRegex.test(String(email).toLowerCase())
      ? setEmailCorrect(true)
      : setEmailCorrect(false);
  }, [email]);

  useEffect(() => {
    const passwordRegex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}/);
    passwordRegex.test(String(password))
      ? setPasswordCorrect(true)
      : setPasswordCorrect(false);
  }, [password]);

  const onSignUpButtonClick = () => {
    if (
      emailCorrect &&
      passwordCorrect &&
      firstNameCorrect &&
      lastNameCorrect
    ) {
      console.log("log in");
    } else console.log("reject");
  };

  return (
    <RegistrationContainer>
      <LogoContainer>
        <img
          src="https://image.flaticon.com/icons/png/512/565/565547.png"
          alt="logo"
        ></img>
      </LogoContainer>
      <RegistrationForm>
        <h3>Sign up</h3>
        <NameForm>
          {inputNameItems.map((item) => (
            <Input
              key={item.id}
              onChange={onChangeHandler}
              type={item.type}
              value={item.value}
              name={item.name}
              placeholder={item.placeholder}
            ></Input>
          ))}
        </NameForm>
        <div>
          {inputItems.map((item) => (
            <Input
              key={item.id}
              onChange={onChangeHandler}
              type={item.name}
              value={item.value}
              name={item.name}
              placeholder={item.placeholder}
            ></Input>
          ))}
        </div>
        <CheckboxContainer>
          <Checkbox type="checkbox" />
          Remember me
        </CheckboxContainer>
        <Button onClick={onSignUpButtonClick}>Sign up</Button>
        <AdditionalQuestions>
          <p>Forgot password?</p>
          <Link to="/signin">
            <p>Already have an account? Sign in</p>
          </Link>
        </AdditionalQuestions>
        <Copyright>
          <p>Copyright © Your Website 2020.</p>
        </Copyright>
      </RegistrationForm>
      <Route path="/signin">
        <SignInForm />
      </Route>
    </RegistrationContainer>
  );
};

export default SignUpForm;
