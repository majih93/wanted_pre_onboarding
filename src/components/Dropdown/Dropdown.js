import React, { useState } from "react";
import styled from "styled-components";
import { TiArrowSortedDown as DownArrow } from "react-icons/ti";
import DropdownInput from "./DropdownInput";
import DropdownItem from "./DropdownItem";

function Dropdown({ titles }) {
  const [pickedItem, setPickedItem] = useState(titles[0].title);
  const [isDropped, setIsDropped] = useState(false);
  const [searchedItem, setSearchedItem] = useState("");

  // !state => prevState => !prevState로 변경
  const dropHandler = () => {
    setIsDropped((prevState) => !prevState);
  };

  const filteredTitles = titles.filter(
    (item) =>
      item.id === 1 ||
      item.title.toLowerCase().includes(searchedItem.toLowerCase())
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
            {filteredTitles.map((item) => (
              <DropdownItem
                key={item.id}
                title={item.title}
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
  max-height: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border: 1.5px solid #d1d1d1;
  border-top: none;
  border-radius: 0 0 3px 3px;
`;
