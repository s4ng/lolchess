# lolchess

### #롤토체스 아이템 조합표, 티어확인 웹 어플리케이션

---

#### Using Tech

React, Riot API, hooks

#### About

깃허브 페이지에 리액트 앱을 퍼블리싱하여 간단한 티어확인, 아이템 조합표 확인 등이 가능한 Serverless 웹앱을 만들어보았다.

#### 그러나...

크로스 도메인 문제(CORS)로 인해 클라이언트-서버 간의 api통신이 불가능한것으로 확인되었다...

리액트 WebPack에서 프록시를 이용해서 주소를 우회해주면 로컬환경에서는 정상적으로 동작한다. 

중간에 서버를 만들지 않는다면 브라우저상에서 Api정보를 불러오는것은 불가능해보인다..
