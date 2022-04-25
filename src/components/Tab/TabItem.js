import React from "react";
import styled from "styled-components";

function TabItem({ tabTitle, index, clickedTab, setClickedTab }) {
  const tabClickHandler = () => {
    setClickedTab(index);
  };

  return (
    <TabItemConatainer
      clickedTab={clickedTab}
      index={index}
      onClick={tabClickHandler}
    >
      {tabTitle}
    </TabItemConatainer>
  );
}

export default TabItem;

const TabItemConatainer = styled.button`
  box-sizing: content-box;
  height: 100%;
  width: 160px;
  border: none;
  background: transparent;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${(props) =>
    props.clickedTab === props.index ? "black" : "darkgray"};
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;
