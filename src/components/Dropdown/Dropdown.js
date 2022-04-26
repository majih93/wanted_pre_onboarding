import React from "react";
import styled from "styled-components";
import { TiArrowSortedDown as DownArrow } from "react-icons/ti";
import DropdownInput from "./DropdownInput";
import DropdownItem from "./DropdownItem";

function Dropdown({ titles }) {
  return (
    <DropdownContainer>
      <PickedItemContainer>
        <PickedItemTitle>All Symbols</PickedItemTitle>
        <DownArrowIcon />
      </PickedItemContainer>
      <InputContainer>
        <DropdownInput />
        <ItemContainer>
          {titles.map((title) => (
            <DropdownItem title={title} key={titles.indexOf(title)} />
          ))}
        </ItemContainer>
      </InputContainer>
    </DropdownContainer>
  );
}

export default Dropdown;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
`;

const PickedItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1.5px solid #d1d1d1;
  border-radius: 3px;
  margin-bottom: 3px;
  &:hover {
    cursor: pointer;
  }
`;

const PickedItemTitle = styled.span`
  font-size: 1rem;
`;

const DownArrowIcon = styled(DownArrow)``;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  width: 100%;
  /* height: 200px; */
  display: flex;
  flex-direction: column;
  /* background-color: slateblue; */
  border: 1.5px solid #d1d1d1;
  border-top: none;
  border-radius: 0 0 3px 3px;
`;
