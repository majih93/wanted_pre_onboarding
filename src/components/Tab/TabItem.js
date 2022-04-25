import React from "react";
import styled from "styled-components";

function TabItem({ tabTitle }) {
  return <TabItemConatainer>{tabTitle}</TabItemConatainer>;
}

export default TabItem;

const TabItemConatainer = styled.button`
  box-sizing: content-box;
  height: 100%;
  width: 160px;
  border: none;
  background: none;
  font-size: 0.8rem;
  font-weight: 700;
  color: gray;
  &:hover {
    cursor: pointer;
  }
`;
