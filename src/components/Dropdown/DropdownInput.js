import React from "react";
import styled from "styled-components";
import { BiSearch as Search } from "react-icons/bi";

function DropdownInput({ placeholder }) {
  return (
    <InputContainer>
      <SearchIcon />
      <Input type="text" placeholder={placeholder} autoFocus={true} />
    </InputContainer>
  );
}

export default DropdownInput;

const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 13px;
  border: 1.5px solid #d1d1d1;
  border-radius: 3px 3px 0px 0px;
`;

const Input = styled.input`
  margin-left: 5px;
  border: none;
  font-size: 1rem;
  ::placeholder {
    color: #d1d1d1;
    font-size: 1rem;
  }
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(Search)`
  color: #d1d1d1;
  width: 13px;
`;
