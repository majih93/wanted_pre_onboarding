import React, { useState } from "react";
import styled from "styled-components";
import TabItem from "./TabItem";

function Tab({ tabTitles }) {
  const [clickedTab, setClickedTab] = useState(0);

  console.log(tabTitles.length);

  return (
    <TabContainer tabLength={tabTitles.length}>
      {tabTitles.map((title) => (
        <TabItem
          key={tabTitles.indexOf(title)}
          tabTitle={title}
          index={tabTitles.indexOf(title)}
          clickedTab={clickedTab}
          setClickedTab={setClickedTab}
        />
      ))}
      <HightlightUnderbar clickedTab={clickedTab} />
    </TabContainer>
  );
}

export default Tab;

const TabContainer = styled.div`
  display: flex;
  position: relative;
  /* width: 500px; */
  width: ${(props) => props.tabLength * 160 + 20}px;
  height: 50px;
  padding: 0 10px;
  border-bottom: 2px solid #edeef7;
`;

const HightlightUnderbar = styled.div`
  bottom: -2px;
  background: transparent;
  position: absolute;
  width: 160px;
  height: 100%;
  border-bottom: 2px solid #39aea9;
  z-index: 1;
  transition: 0.2s;
  transform: translateX(${(props) => `${Number(props.clickedTab) * 100}%`});
`;
