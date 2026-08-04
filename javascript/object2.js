// 자바스크립트 내장 객체

// 1. 날짜/시간
const now = new Date();
console.log(now);
console.log("연도", now.getFullYear());
// 월 0부터 시작
console.log("월", now.getMonth());
console.log("일", now.getDate());
console.log("시", now.getHours());
console.log("분", now.getMinutes());
console.log("초", now.getSeconds());
console.log("날짜타입 => 문자열", now.toLocaleString());

// 2. 문자열
const msg = "hello javascript";
// const msg = new String("hello javascript");
console.log("특정위치 문자 반환", msg.charAt(4));

console.log("문자 찾기", msg.match("ja"));
console.log("문자 찾기", msg.search("ja"));
console.log("", msg.indexOf("ja"));
console.log("특정 문자 변경", msg.replace("hello", "hi"));
console.log("특정 위치 문자 추출", msg.substring(6, 10));
console.log("대문자변경", msg.toUpperCase());
console.log("소문자변경", msg.toLowerCase());

// 3. 수학
console.log(Math.PI);
console.log(Math.floor(3.141592));
console.log(Math.ceil(3.141592));
console.log(Math.round(3.141592));
console.log(Math.abs(-3.141592));
console.log(Math.max(5, 8, 9, 12, 4));
console.log(Math.min(5, 8, 9, 12, 4));
// 0.0 <= Math.random() < 1.0
console.log(Math.random());
// 0~10
console.log(Math.floor(Math.random() * 11));

// 두 개의 주사위를 던져서 나오는 눈의 하비 5일때 멈춤

// let dice1 = Math.floor(Math.random() * 6 + 1);
// let dice2 = Math.floor(Math.random() * 6 + 1);

// while (dice1 + dice2 != 5) {
//   dice1 = Math.floor(Math.random() * 6 + 1);
//   dice2 = Math.floor(Math.random() * 6 + 1);
//   console.log(dice1 + dice2);
// }

// 로또번호 6개 추출한 후 배열에 담은 후 출력

let lotto = [];

while (true) {
  let lottery = Math.floor(Math.random() * 45) + 1;
  if (lotto.indexOf(lottery) === -1) {
    lotto.push(lottery);
  }
  if (lotto.length == 6) {
    break;
  }
}
console.log(
  "로또 번호",
  lotto.sort((a, b) => a - b),
);
