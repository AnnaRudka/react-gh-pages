import styled from "styled-components";

export const RegistrationContainer = styled.div`
  width: 430px;
  margin: 20px auto;
  background-color: #121212;
  color: white;
  font-family: "Roboto", sans-serif;
  padding: 50px;
`;

export const LogoContainer = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f5bed1;
  align-items: center;
  margin: 0 auto;

  img {
    width: 100%;
    padding: 7px;
  }
`;

export const RegistrationForm = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;

  h3 {
    margin: 10px;
    text-align: center;
    font-weight: 300;
  }
`;

export const NameForm = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  padding: 15px 5px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #424242;
  border-radius: 3px;
  color: #fff;
  background: transparent;
`;

export const CheckboxContainer = styled.div`
  margin: 0 0 15px;
  font-size: 11px;
  color: #aaaaaa;
  line-height: 1.8em;
  cursor: pointer;
  text-align: left;
`;

export const Checkbox = styled.input`
  border: 1px solid red;
  margin-right: 10px;
`;
export const Button = styled.button`
  padding: 5px 0px;
  margin: 10px 0px;
  width: 100%;
  background-color: #1bdbf8;
  border: 2px solid #1bdbf8;
  outline: none;
  border-radius: 2px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  color: #121212;
  cursor: pointer;
`;
export const AdditionalQuestions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 15px;
  font-size: 11px;
  color: #1bdbf8;
  line-height: 1.8em;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #1bdbf8;
  }
`;
export const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 11px;
  color: rgb(126, 126, 126);
`;

export const AddPostContainer = styled.div`
  width: 730px;
  margin: 20px auto;
  background-color: #121212;
  font-family: "Roboto", sans-serif;
  color: white;
  padding: 50px;
  border: #adff2f 2px solid;
  border-radius: 20px;
  h3 {
    margin: 10px;
    text-align: center;
    font-weight: 300;
  }
`;
export const Textarea = styled.textarea`
  resize: none;
  overflow: auto;
  padding: 15px 5px;
  margin: 10px 0;
  width: 100%;
  border: 1px solid #424242;
  border-radius: 3px;
  color: #fff;
  background: transparent;
  font-family: "Roboto", sans-serif;
`;

export const SelectorBlock = styled.div`
  margin: 10px 0;
  line-height: 1.3;
  label {
    color: rgb(161, 161, 161);
    font-size: 14px;
    padding-right: 10px;
  }
  select {
    color: rgb(161, 161, 161);
    background: transparent;
    padding: 5px;
 }
  }
`;
