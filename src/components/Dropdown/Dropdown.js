import React, { useState } from "react";
import styled from "styled-components";
import { TiArrowSortedDown as DownArrow } from "react-icons/ti";
import DropdownInput from "./DropdownInput";
import DropdownItem from "./DropdownItem";

function Dropdown({ titles }) {
  const [pickedItem, setPickedItem] = useState(titles[0]);
  const [isDropped, setIsDropped] = useState(false);
  const [searchedItem, setSearchedItem] = useState("");

  const dropHandler = () => {
    setIsDropped(!isDropped);
  };

  const filteredTitles = titles.filter(
    (title) =>
      title === titles[0] ||
      title.toLowerCase().includes(searchedItem.toLowerCase())
  );

  return (
    <DropdownContainer>
      <PickedItemContainer onClick={dropHandler}>
        <PickedItemTitle>{pickedItem}</PickedItemTitle>
        <DownArrowIcon isdropped={isDropped.toString()} />
      </PickedItemContainer>
      {isDropped ? (
        <InputContainer>
          <DropdownInput
            placeholder="Search Symbol"
            setSearchedItem={setSearchedItem}
          />
          <ItemContainer>
            {/* <DropdownItem title={titles[0]} /> */}
            {filteredTitles.map((title) => (
              <DropdownItem
                key={titles.indexOf(title)}
                title={title}
                setIsDropped={setIsDropped}
                setPickedItem={setPickedItem}
                searchedItem={searchedItem}
                setSearchedItem={setSearchedItem}
              />
            ))}
          </ItemContainer>
        </InputContainer>
      ) : null}
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

const DownArrowIcon = styled(DownArrow)`
  transform: rotate(
    ${(props) => (props.isdropped === "true" ? "180deg" : "0deg")}
  );
  transition: all ease 0.5s;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1.5px solid #d1d1d1;
  border-top: none;
  border-radius: 0 0 3px 3px;
`;
