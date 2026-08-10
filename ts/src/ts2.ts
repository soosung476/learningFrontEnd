export {};

// | : 유니온
// 리터럴
const userName1 = "bob";
let userName2 = "Tom";
// userName2 = 3;

let userName3: string | number = "Tom";
userName3 = 3;

type Job = "developer" | "designer" | "manager";
interface Person {
  name: string;
  job: Job;
}

let person1: Person = {
  name: "Yafu",
  job: "designer",
};

// HighSchoolStudent
type Grade = 1 | 2 | 3;
interface HighSchoolStudent {
  name: string;
  grade: Grade;
}

const student1: HighSchoolStudent = {
  name: "Charlie",
  grade: 2,
};

interface Car {
  type: "car";
  color: "string";
  start(): void;
}

interface Mobile {
  type: "mobile";
  color: "string";
  call(): void;
}

const getGift = (gift: Car | Mobile) => {
  console.log(gift.color);
  if (gift.type === "car") {
    gift.start();
  } else {
    gift.call();
  }
};

interface Developer {
  name: string;
  skills: string[];
}
interface Manager {
  name: string;
  age: number;
  manage(): void;
}

type DevManager = Developer & Manager & {};

const person2: DevManager = {
  name: "Alice",
  skills: ["javascript", "typescript"],
  age: 26,
  manage(): void {
    console.log("do managing");
  },
};
person2.manage();

// 제네릭
const getSize = (arr: number[] | string[]): number => {
  return arr.length;
};

const arr1 = [1, 2, 3, 4, 5];
console.log(getSize(arr1));

const arr2 = ["a", "b", "c"];
console.log(getSize(arr2));

// boolean[], Date[]
const getGenericSize = <T>(arr: T[]): number => {
  return arr.length;
};

function getGenericSize2<T>(arr: T[]) {
  return arr.length;
}

console.log(getGenericSize(arr1));
console.log(getGenericSize2(arr2));
const arr3 = [true, false, true];

console.log(getGenericSize(arr3));

interface Mobile2<T> {
  name: string;
  price: number;
  option: T;
}

const myPhone: Mobile2<{ color: string; coupon: boolean }> = {
  name: "galaxy",
  price: 100000,
  option: { color: "black", coupon: true },
};

const myTab: Mobile2<string[]> = {
  name: "galaxy",
  price: 100000,
  option: ["pen", "cover"],
};

// 함수
// 2개의 숫자를 받아서 더한 결과를 출력하는 함수

const add = (a: number, b: number): void => {
  console.log(a + b);
};

// age 값을 받아서 19보다 큰지 true, false 반환
const isAdult = (age: number): boolean => {
  return age > 19 ? true : false;
};
console.log(isAdult(20));

const hello = (name?: string): void => {
  console.log(`Hello, ${name || "Guest"}`);
};
hello();
hello("Sam");

const hello2 = (name: string = "Guest"): void => {
  console.log(`Hello, ${name}`);
};
hello2();
hello2("Sam");

const sum = (...nums: number[]): number => {
  return nums.length;
};

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7));

// 유틸리티
// Pick<>, Omit<>
// keyof : 객체 타입에서 key의 값을 타입으로 가져온것.

interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "F";
}

type UserKey = keyof User;
const uk: UserKey = "id";

// Partial<T> : T의 모든 속성을 선택적으로 만들기
type PartialUser = Partial<User>;
const pUser1: PartialUser = {};
const pUser2: PartialUser = { id: 1 };
const pUser3: PartialUser = { id: 1, name: "Alice" };

// Required<T> : T의 모든 속성을 필수로 만들기
type RequiredUser = Required<PartialUser>;
const rUser1: RequiredUser = { id: 1, name: "Bob", age: 30, gender: "M" };

// Readonly<T> : T의 모든 속성을 읽기전용으로 만들기

type ReadUser = Readonly<User>;
const reUser: ReadUser = { id: 1, name: "Bob", age: 30, gender: "M" };
// reUser.name = "Alice";

// Exclude<T1,T2> : T1에서 T2 제외
type T1 = string | number | boolean;
type T2 = Exclude<T1, number>;
