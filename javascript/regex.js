// 정규식
let string = "Javascript jQuery Ajax";
// 정규시 생성
//const regExp1 = new RegExp("Ajax");
const regExp1 = /Ajax/;

// RegExp 매소드
console.log(regExp1.exec(string));
console.log(regExp1.test(string));

// String 매소드 : split, replace
console.log(string.match(regExp1));
console.log(string.search(regExp1));
