// fetch() : 서버나 API에 HTTP요청을 보내고 데이터를 받아오는 함수
// 결과는 Promose <Response>이며, JSON데이터라면 response.json()을 한번 더 실행해야함.
// setTimeout(() => {}, 3000);
// 비동기식
// 콜백함수

// 비동기식으로 서버에서 데이터 가져오기
// 1. fetch()
// 2. axios() : 설치 필요
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => console.log(data));

// 비동기식 => 동기식 코드처럼 읽기 쉽게 작성
async function load() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error("error발생", e);
  }
}
load();

const load2 = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
};
load2();
