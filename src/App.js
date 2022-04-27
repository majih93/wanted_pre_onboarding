import styled from "styled-components";
import Dropdown from "./components/Dropdown/Dropdown";
import Slider from "./components/Slider/Slider";
import Toggle from "./components/Toggle/Toggle";
import Tab from "./components/Tab/Tab";
import Input from "./components/Input/Input";

const titles = [
  { id: 1, title: "All Symbols" },
  { id: 2, title: "BTCUSD.PERP" },
  { id: 3, title: "ETHUSD.PERP" },
  { id: 4, title: "BCHUSD.PERP" },
  { id: 5, title: "LTCUSD.PERP" },
  { id: 6, title: "XRPUSD.PERP" },
  { id: 7, title: "1000SHIBUSD.PER" },
];

function App() {
  return (
    <MainContainer>
      <Title>원티드 프리온보딩 선발과제_마지혁</Title>
      <ItemContainer>
        <ItemTitle>Toggle</ItemTitle>
        <Toggle texts={["기본", "상세"]} />
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Tab</ItemTitle>
        <Tab tabTitles={["감자", "고구마", "카레라이스"]} />
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Slider</ItemTitle>
        <Slider />
      </ItemContainer>
      <ItemContainer>
        <ItemTitle>Input</ItemTitle>
        <Input />
      </ItemContainer>
      <ItemContainer className="dropdown">
        <ItemTitle>Dropdown</ItemTitle>
        <Dropdown titles={titles} />
      </ItemContainer>
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  .dropdown {
    height: 600px;
  }
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  margin: 40px;
  font-size: 3rem;
`;

const ItemContainer = styled.div`
  margin-top: 50px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  width: 500px;
  padding-left: 40px;
`;

const ItemTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 40px;
  transform: translateX(-40px);
`;
