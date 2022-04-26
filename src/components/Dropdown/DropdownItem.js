import React from "react";
import styled from "styled-components";

function DropdownItem({
  title,
  setIsDropped,
  setPickedItem,
  searchedItem,
  setSearchedItem,
}) {
  const changePickedItem = () => {
    setPickedItem(title);
    setIsDropped(false);
    if (searchedItem !== "") {
      setSearchedItem("");
    }
  };

  return <TitleContainer onClick={changePickedItem}>{title}</TitleContainer>;
}

export default DropdownItem;

const TitleContainer = styled.li`
  display: block;
  font-size: 1rem;
  width: 100%;
  padding: 10px 30px;
  word-break: break-all;
  &:hover {
    cursor: pointer;
    background-color: #f5f4f4;
  }
`;
