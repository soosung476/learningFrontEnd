// 1. 두 개의 숫자를 받아서 더한 결과를 반환하는 함수 작성
// 2. 함수 안에서 1~10까지 더한 결과를 출력하는 함수 작성
// 3. multiple(num)정의 - num이 3의 배수라면 "박수" 출력 아니면 "통과"

// 4. multiple2(num) - 3이 배수인 경우 "박수" 9의 배수인 경우 "박수*2"/ 통과
// 5. pass(outline, law) - 두과목 합해서 120점 이상이면 합격
// 단 한 과목이라도 40점 미만이면 과락으로 불합격

// 1
const sum = function (x, y) {
  return x + y;
};

// 2
const myFunc1 = function () {
  let temp = 0;
  for (let index = 1; index <= 10; index++) {
    temp += index;
  }
  console.log(temp);
};

// 3
const multiple = function (num) {
  if (num % 3 === 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};

// 4
const multiple2 = function (num) {
  if (num % 9 === 0) {
    console.log("박수*2");
  } else if (num % 3 === 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
};

// 5
const pass = function (outline, law) {
  if (outline + law >= 120 && outline >= 40 && law >= 40) {
    console.log("pass");
  } else {
    console.log("fail");
  }
};

console.log(sum(2, 3));
myFunc1();
multiple(3);
multiple(5);
multiple2(9);
multiple2(6);
multiple2(14);
pass(80, 40);
pass(100, 30);
