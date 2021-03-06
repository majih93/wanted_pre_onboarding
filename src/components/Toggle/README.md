# Toggle 과제 문서

## 1. 요구 기능

#### 1) 핵심 기능

- 2 가지 선택지 중, 선택되지 않은 선택지를 클릭 시에 선택되는 스타일링 및 로직 구현

#### 2) 부가 기능

- 선택지 변경 시 슬라이딩 애니메이션 형태로 구현

## 2. 구현 과정

### 1) useToggle 커스텀 훅 생성

- 토글 버튼이 클릭되었을 때 state를 변경시켜주는 useToggle 커스텀 훅 생성
- 요소 하나를 클릭시 true/false 를 번갈아가면서 변경하는 경우 / 요소 두 개를 두고 하나는 클릭 시 true로 state를 변경하고 하나는 클릭시 false로 변경하는 경우 두 가지 경우를 상정해서 구현

### 2) Toggle 컴포넌트 구현

- container div 안에 50%의 넓이를 가지는 두 개의 버튼을 구현
- 버튼에 표시되는 텍스트는 props로 전달받은 texts 객체를 활용해서 해당 컴포넌트를 사용할 때 필요한 텍스트를 넣을 수 있도록 구현
- 클릭했을 때, 해당되는 버튼의 배경화면 색상 변경을 구현하기 위해서 `z-index:1`이고 컨테이너의 50% 넓이를 가진 ToggleBar div 를 만들고 state 에 따라 위치를 `transform: translateX(0% -> 100%)`하는 형태로 구현(텍스트가 보이게 하기 위해서 텍스트를 표시하는 ToggleItem button에는 `z-index:2` 및 `background:transparent` 속성 부여)
- transform을 통한 위치 이동 시, transition 시간을 줘서 애니메이션 구현

## 어려움

### 1) Toggle시 배경화면 변경 애니메이션 적용

처음에는 ToggleBar 를 구현하지 않고, 두 개의 ToggleItem button에 CSS 를 통해 배경화면 변경 관련 스타일링을 하고자 하였습니다. 이렇게 했을 때 애니메이션 적용이 힘들다는 것을 깨달았고, 다른 방법을 찾아야 했습니다.

원활한 애니메이션 효과를 위해서 같은 속성을 주고, 다른 값을 활용해야되다는 것을 알게 되었습니다.

### 2) ToggleBar에 적절한 width 값 부여

처음에는 ToggleBar에 `width: 50%` 로 넓이값을 정했습니다. 이 경우, 아래 사진처럼 ToggleBar가 우측으로 삐져나오는 현상이 있었습니다.

[문제](https://user-images.githubusercontent.com/87853486/165452856-bc30248f-4b96-47c4-8161-0c1c4ea4a0fb.PNG)

부모 요소에 `padding: 2.5px`가 주어져 있어 부모요소의 전체 넓이의 50%에 해당되는 넓이를 가지는 ToggleBar가 제가 원했던 padding 을 제외한 넓이의 50%보다 큰 넓이를 가지고 있는게 문제라는 것을 파악하였습니다.

이를 해결하기 위해 div를 하나 추가해 감싸보기도 하고, ToggleBar 자체의 넓이를 고정값으로 주기도 해보았습니다.

고정값으로 정해두면 문제는 해결되었지만, 이렇게 구현할 경우 부모 요소의 넓이가 변경될 때마다 코드를 수정해줘야하는 문제가 있었습니다. 부모요소의 넓이와 관계 없이 적절한 넓이를 가지게 할 방법을 고민하던 중, 넓이에서 padding 값을 빼주면 된다는 점을 활용해 calc()를 이용해 `width: calc(50% - 2.5px)`로 구현하여 문제를 해결하였습니다. 높이값 또한 이를 활용해 부모요소의 넓이값에 따라 동적으로 맞춰지도록 구현할 수 있었습니다.
