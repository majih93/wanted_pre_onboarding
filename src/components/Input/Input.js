import React, { useState } from "react";
import styled from "styled-components";
import { BsFillCheckCircleFill as Checked } from "react-icons/bs";
import { ImEyeBlocked as NotShowing, ImEye as Showing } from "react-icons/im";
import debounce from "./debounce";

function Input() {
  const [isValidated, setIsValiated] = useState("");
  const [pwType, setPwType] = useState("password");

  const validateEmail = (e) => {
    let email = e.target.value;

    if (email === "") {
      setIsValiated("");
    } else {
      let validationRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,10})$/;
      if (validationRegex.test(email) === true) {
        setIsValiated(true);
      } else {
        setIsValiated(false);
      }
    }
  };

  const debounceValidation = debounce(validateEmail, 500);

  const changePwType = () => {
    if (pwType === "password") {
      setPwType("text");
    } else {
      setPwType("password");
    }
  };

  return (
    <Inputs>
      <InputContainer>
        <InputLabel>E-mail</InputLabel>
        <StyledInput
          type="email"
          placeholder="E-mail"
          onChange={debounceValidation}
        />
        <CheckIcon isvalidated={isValidated.toString()} />
        <ErrorMessage isValidated={isValidated}>
          Invalid e-mail address.
        </ErrorMessage>
      </InputContainer>
      <InputContainer>
        <InputLabel>Password</InputLabel>
        <StyledInput type={pwType} placeholder="Password" />
        {pwType === "password" ? (
          <NotShowIcon onClick={changePwType} />
        ) : (
          <ShowIcon onClick={changePwType} />
        )}
      </InputContainer>
    </Inputs>
  );
}

export default Input;

const Inputs = styled.div`
  background-color: #f7f7f7;
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 10px 10px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const StyledInput = styled.input`
  outline: none;
  width: 100%;
  height: 50px;
  padding-left: 13px;
  padding-right: 5px;
  font-size: 1rem;
  color: black;
  border: 1.5px solid #d1d1d1;
  border-radius: 5px;
  ::placeholder {
    color: #d1d1d1;
  }
  &:focus {
    border: 1.5px solid black;
  }
`;

const InputLabel = styled.label`
  padding-left: 5px;
  font-size: 0.7rem;
  margin-bottom: 4px;
  color: darkgray;
`;

const ErrorMessage = styled.span`
  font-size: 0.7rem;
  padding-left: 4px;
  color: red;
  display: ${(props) => (props.isValidated === false ? "" : "none")};
`;

const CheckIcon = styled(Checked)`
  position: absolute;
  fill: ${(props) => (props.isvalidated === "true" ? "#39aea9" : "#DDDDDD")};
  right: 13px;
  top: 37px;
  width: 15px;
`;

const NotShowIcon = styled(NotShowing)`
  position: absolute;
  fill: #444444;
  right: 13px;
  top: 37px;
  &:hover {
    cursor: pointer;
  }
`;

const ShowIcon = styled(Showing)`
  position: absolute;
  fill: #39aea9;
  right: 13px;
  top: 37px;
  &:hover {
    cursor: pointer;
  }
`;
