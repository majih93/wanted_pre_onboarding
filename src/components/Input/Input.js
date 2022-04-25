import React from "react";
import styled from "styled-components";
import { BsFillCheckCircleFill as Checked } from "react-icons/bs";
import { ImEyeBlocked as NotShowing } from "react-icons/im";

function Input() {
  return (
    <Inputs>
      <InputContainer>
        <InputLabel>E-mail</InputLabel>
        <StyledInput type="email" placeholder="E-mail" />
        <CheckIcon />
        <ErrorMessage>Invalid e-mail address.</ErrorMessage>
      </InputContainer>
      <InputContainer>
        <InputLabel>Password</InputLabel>
        <StyledInput type="password" placeholder="Password" />
        <NotShowIcon />
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
  /* display: none; */
`;

const CheckIcon = styled(Checked)`
  position: absolute;
  fill: #39aea9;
  right: 10px;
  top: 37px;
`;

const NotShowIcon = styled(NotShowing)`
  position: absolute;
  fill: #444444;
  right: 10px;
  top: 37px;
`;
