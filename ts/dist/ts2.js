"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// | : 유니온
// 리터럴
const userName1 = "bob";
let userName2 = "Tom";
// userName2 = 3;
let userName3 = "Tom";
userName3 = 3;
let person1 = {
    name: "Yafu",
    job: "designer",
};
const student1 = {
    name: "Charlie",
    grade: 2,
};
const getGift = (gift) => {
    console.log(gift.color);
    if (gift.type === "car") {
        gift.start();
    }
    else {
        gift.call();
    }
};
const person2 = {
    name: "Alice",
    skills: ["javascript", "typescript"],
    age: 26,
    manage() {
        console.log("do managing");
    },
};
person2.manage();
// 제네릭
const getSize = (arr) => {
    return arr.length;
};
const arr1 = [1, 2, 3, 4, 5];
console.log(getSize(arr1));
const arr2 = ["a", "b", "c"];
console.log(getSize(arr2));
// boolean[], Date[]
const getGenericSize = (arr) => {
    return arr.length;
};
function getGenericSize2(arr) {
    return arr.length;
}
console.log(getGenericSize(arr1));
console.log(getGenericSize2(arr2));
const arr3 = [true, false, true];
console.log(getGenericSize(arr3));
const myPhone = {
    name: "galaxy",
    price: 100000,
    option: { color: "black", coupon: true },
};
const myTab = {
    name: "galaxy",
    price: 100000,
    option: ["pen", "cover"],
};
// 함수
// 2개의 숫자를 받아서 더한 결과를 출력하는 함수
const add = (a, b) => {
    console.log(a + b);
};
// age 값을 받아서 19보다 큰지 true, false 반환
const isAdult = (age) => {
    return age > 19 ? true : false;
};
console.log(isAdult(20));
const hello = (name) => {
    console.log(`Hello, ${name || "Guest"}`);
};
hello();
hello("Sam");
const hello2 = (name = "Guest") => {
    console.log(`Hello, ${name}`);
};
hello2();
hello2("Sam");
const sum = (...nums) => {
    return nums.length;
};
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7));
const uk = "id";
const pUser1 = {};
const pUser2 = { id: 1 };
const pUser3 = { id: 1, name: "Alice" };
const rUser1 = { id: 1, name: "Bob", age: 30, gender: "M" };
const reUser = { id: 1, name: "Bob", age: 30, gender: "M" };
