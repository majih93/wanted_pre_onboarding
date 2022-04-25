import React from "react";
import styled from "styled-components";
import useToggle from "./useToggle";

function Toggle({ texts }) {
  const [isChecked, toggleIsChecked] = useToggle(false);

  return (
    <ToggleContainer isChecked={isChecked}>
      <ToggleBar isChecked={isChecked} />
      <ToggleItem onClick={() => toggleIsChecked(false)}>{texts[0]}</ToggleItem>
      <ToggleItem onClick={() => toggleIsChecked(true)}>{texts[1]}</ToggleItem>
    </ToggleContainer>
  );
}

export default Toggle;

const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: #efefef;
  width: 400px;
  height: 45px;
  border-radius: 25px;
  padding: 2.5px;

  button:nth-of-type(1) {
    color: ${(props) => (props.isChecked ? "gray" : "black")};
  }
  button:nth-of-type(2) {
    color: ${(props) => (props.isChecked ? "black" : "gray")};
  }
`;

const ToggleItem = styled.button`
  width: 50%;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 25px;
  background: transparent;
  border: none;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;

const ToggleBar = styled.div`
  width: calc(50% - 2.5px);
  height: calc(100% - 5px);
  background-color: white;
  position: absolute;
  border-radius: 25px;
  z-index: 1;
  transform: translateX(${(props) => (props.isChecked ? "100%" : "0%")});
  transition: 0.1s;
`;
