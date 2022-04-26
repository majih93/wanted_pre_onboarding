import React from "react";
import styled from "styled-components";

function DropdownItem({ title }) {
  return <TitleContainer>{title}</TitleContainer>;
}

export default DropdownItem;

const TitleContainer = styled.li`
  display: block;
  font-size: 1rem;
  width: 100%;
  padding: 10px 30px;
  &:hover {
    cursor: pointer;
    background-color: #e1e1e1;
  }
`;
