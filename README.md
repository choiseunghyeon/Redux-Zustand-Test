@mantine/core @mantine/hooks

https://github.com/jherr/efficient-selectors/blob/main/redux-selectors/package.json

상태관리를 왜 해야 하는가?
컴포넌트 개수, 깊이가 많아질 수록 공유되는 상태 개수도 많아질텐데
이떄, 공통 부모를 찾아서 상태를 내려주는 것보다 글로벌하게 관리하는게 더 편하다.

- 상태 변경 로직을 분리할 수 있다.

Flux 구조

Action -> Dispatcher -> Store -> View

Action
상태 업데이트에 필요한 Action Type과 Parameter 정보를 가지는 객체

Dispatcher
Action을 Store에 전달

Store
상태 보관소

Reducer
Action객체를 바탕으로 상태를 업데이트 한다.

redux / zustand

useSelector 작동방식 / 최적화

zustand 특징

- 적은 용량
- 구조적 자유로움
- 간단한 코드

Redux - Zustand
둘의 차이점
둘의 사용법
