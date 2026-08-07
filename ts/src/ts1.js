// 타입지정
// string, number, boolean, array, null, undefined
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var car = "BMW";
var car2 = "BMW";
// car2 = 3;
// 선언된 타입과 다른 타입 대입시 오류
var age = 23;
var isAdult = false;
var n = null;
var u = undefined;
var o = {};
var fruits = ["사과", "바나나", "딸기"];
// fruits.push(95);
var scores = [88, 84, 84, 48];
var mixed = ["사과", "바나나", 78];
// 타입 추론
var fruits2 = ["사과", "바나나", "딸기"];
var vegetables = ["carrot", "broccoli", "spinach"];
var vegetables2 = ["carrot", "broccoli", "spinach"];
var scores2 = [100, 95, 85];
// vegetables.push("potato");
// scores2.push()
var newArray = __spreadArray(__spreadArray([], scores2, true), [85], false);
console.log(newArray);
// 타입스크립트에서 추가된 데이터 타입
// 튜플: 배열인데 요소의 개수와 각 위치의 타입을 미리 정해놓은 배열
var person = ["Alice", 25];
console.log(person[0].toLowerCase());
person[0] = "Tiger";
person[1] = 26;
console.log(person);
function getUserInfo() {
    return ["Bob", 30, true];
}
var _a = getUserInfo(), username = _a[0], age1 = _a[1], isUserAdult = _a[2];
// function getUserInfo(): (string|number|boolean)[] {
//   return ["Bob", 30, true];
// }
// console.log(getUserInfo());
// 추론을 이용한 튜플 선언
// 상수처럼
var person2 = ["Alice", 25];
// person2[0] = "three";
// 배열선언
var array1 = [];
// 튜플
var tuple1 = [0, ""];
// any : js랑 같은 개념 (거의 사용하지 않음)
// any : 타입 검사 포기
var num;
num = 95;
num = "Nine";
var randomValue = 10;
randomValue = "hello";
console.log(randomValue.length);
randomValue = true;
// unknown : 무슨 타입인지 모르니까 사용불가
// 확인 후 사용
var unknownValue = 10;
unknownValue = "Hello";
console.log(unknownValue);
if (typeof unknownValue == "string") {
    var strLengh = unknownValue.length;
    console.log(strLengh);
}
