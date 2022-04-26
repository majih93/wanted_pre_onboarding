import React, { useState } from "react";
import styled from "styled-components";

function Slider() {
  const percentages = ["1%", "25%", "50%", "75%", "100%"];

  return (
    <SliderContainer>
      <ValueContainer>
        <Value>100</Value>
        <Percentage>%</Percentage>
      </ValueContainer>
      <BarContainer>
        <BottomBar type="range" />
        <CirclesContainer>
          {percentages.map((percentage) => (
            <Circle />
          ))}
        </CirclesContainer>
        <NumberButtonsContainer>
          {percentages.map((percentage) => (
            <NumberButton>{percentage}</NumberButton>
          ))}
        </NumberButtonsContainer>
      </BarContainer>
    </SliderContainer>
  );
}

export default Slider;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #f8f8f8;
  width: 370px;
  height: 60px;
  border: 1.5px solid #e1e1e1;
  border-radius: 5px;
  padding: 0 20px;
`;

const Value = styled.span`
  font-weight: 700;
  margin-right: 20px;
`;

const Percentage = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: gray;
`;

const BarContainer = styled.div`
  margin-top: 20px;
  position: relative;
  height: 70px;
`;

const BottomBar = styled.input`
  background: none;
  position: relative;
  z-index: 2;
  padding: 0 5px;
  width: 100%;
  ::-webkit-slider-thumb {
    background-color: #39aea9;
    cursor: pointer;
    height: 20px;
    width: 20px;
    border: 3px solid white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 50%;
    transform: translateY(-8px);
    z-index: 3;
  }

  ::-webkit-slider-runnable-track {
    background-color: #eeeeee;
    width: 100%;
    height: 5px;
    cursor: pointer;
    border-radius: 2px;
  }
`;

const CirclesContainer = styled.div`
  overflow-x: visible;
  padding: 0 5px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  bottom: 40px;
  height: 30px;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  background-color: #eeeeee;
  border-radius: 50%;
`;

const NumberButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 5px;
  button:nth-of-type(2) {
    transform: translateX(-6px);
  }
  button:nth-of-type(4) {
    transform: translateX(6px);
  }
`;

const NumberButton = styled.button`
  width: 40px;
  height: 18px;
  background-color: #eeeeee;
  color: gray;
  font-size: 0.5rem;
  border-radius: 10px;
  border: none;
  margin-top: 13px;
  &:hover {
    cursor: pointer;
    background-color: #39aea9;
    color: white;
  }
`;
