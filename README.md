# 원티드 프리온보딩 선발과제

## 리팩토링 리포지토리

[리팩토링 리포지토리](https://github.com/majih93/wanted_refactor)

## 배포된 사이트

[배포사이트](https://rococo-choux-31af06.netlify.app/)

## 실행 방법

git clone

> git clone https://github.com/majih93/wanted_pre_onboarding.git

필요 모듈 설치

> npm install

로컬 서버에서 실행

> npm start

## 프로젝트 구조

src/components 아래에 과제별 폴더를 하나씩 만들어서 필요한 파일들을 모아두는 식으로 폴더구조를 잡았습니다.
또한 props를 전달받아 구현되는 컴포넌트들에 전달되는 데이터는 App.js 컴포넌트에서 확인하실 수 있습니다.

```bash

src
│  App.js
│  index.css
│  index.js
└─components
    ├─Dropdown
    │      Dropdown.js
    │      DropdownInput.js
    │      DropdownItem.js
    │      README.md
    │
    ├─Input
    │      debounce.js
    │      Input.js
    │      README.md
    │
    ├─Slider
    │      README.md
    │      Slider.js
    │
    ├─Tab
    │      README.md
    │      Tab.js
    │      TabItem.js
    │
    └─Toggle
            README.md
            Toggle.js
            useToggle.js


```

## 사용기술

### styled-components

불필요한 CSS 파일을 줄이고, 한 페이지에서 스타일 코드와 로직 코드를 확인하는 것이 좋을 듯 하여 사용하였습니다.

### react-icons

아이콘이 필요한 과제 구현을 위해 사용하였습니다.

# 과제별 코드 및 README

### [Toggle](https://github.com/majih93/wanted_pre_onboarding/blob/main/src/components/Toggle)

### [Tab](https://github.com/majih93/wanted_pre_onboarding/blob/main/src/components/Tab)

### [Slider](https://github.com/majih93/wanted_pre_onboarding/blob/main/src/components/Slider)

### [Input](https://github.com/majih93/wanted_pre_onboarding/blob/main/src/components/Input)

### [Dropdown](https://github.com/majih93/wanted_pre_onboarding/blob/main/src/components/Dropdown)
