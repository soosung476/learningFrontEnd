export {};
// 타입지정
// string, number, boolean, array, null, undefined

const car: string = "BMW";
let car2: string = "BMW";
// car2 = 3;
// 선언된 타입과 다른 타입 대입시 오류

let age: number = 23;
let isAdult: boolean = false;
let n: null = null;
let u: undefined = undefined;
let fruits: string[] = ["사과", "바나나", "딸기"];
// fruits.push(95);
let scores: number[] = [88, 84, 84, 48];

let mixed: (string | number)[] = ["사과", "바나나", 78];

// 타입 추론
let fruits2 = ["사과", "바나나", "딸기"];

const vegetables: ReadonlyArray<string> = ["carrot", "broccoli", "spinach"];
const vegetables2: readonly string[] = ["carrot", "broccoli", "spinach"];
const scores2: readonly number[] = [100, 95, 85];
// vegetables.push("potato");
// scores2.push()
const newArray = [...scores2, 85];
console.log(newArray);

// 타입스크립트에서 추가된 데이터 타입
// 튜플: 배열인데 요소의 개수와 각 위치의 타입을 미리 정해놓은 배열
const person: [string, number] = ["Alice", 25];
console.log(person[0].toLowerCase());

person[0] = "Tiger";
person[1] = 26;
console.log(person);

function getUserInfo(): [string, number, boolean] {
  return ["Bob", 30, true];
}

const [username, age1, isUserAdult] = getUserInfo();
// function getUserInfo(): (string|number|boolean)[] {
//   return ["Bob", 30, true];
// }

// console.log(getUserInfo());

// 추론을 이용한 튜플 선언
// 상수처럼
const person2 = ["Alice", 25] as const;
// person2[0] = "three";

// 배열선언
const array1: number[] = [];
// 튜플
const tuple1: [number, string] = [0, ""];

// any : js랑 같은 개념 (거의 사용하지 않음)
// any : 타입 검사 포기
let num;
num = 95;
num = "Nine";

let randomValue: any = 10;
randomValue = "hello";
console.log(randomValue.length);
randomValue = true;

// unknown : 무슨 타입인지 모르니까 사용불가
// 확인 후 사용
let unknownValue: unknown = 10;
unknownValue = "Hello";

console.log(unknownValue);

if (typeof unknownValue == "string") {
  let strLengh: number = unknownValue.length;
  console.log(strLengh);
}

// void : 반환값이 없는 함수
function mmessage(msg: string): void {
  console.log(msg);
}

const print1 = (): void => {
  console.log(print1);
};

// printLength()
const printLength = (text: string | null): void => {
  if (text === null) {
    console.log("No text");
    return;
  } else {
    console.log(`${text.length}`);
  }
};
printLength(null);

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num): void => {
  console.log(num);
});

// never : 에러를 반환하거나, 절대 종료되지 않는 함수의 타입으로 사용
// x 파라메터 : string, number, boolean
// 리턴타입 없음

const handleValue = (x: string | number | boolean | object): void => {
  if (typeof x === "string") {
  } else if (typeof x === "number") {
  } else if (typeof x === "boolean") {
  } else if (typeof x === "object") {
  } else {
    const unreachable: never = x;
    throw new Error("Unhandled type : " + unreachable);
  }
};

handleValue("Hello");
handleValue(42);
handleValue(true);
handleValue({ name: "John" });

// 열거형 : 관련있는 상수들을 하나의 이름으로 묶어놓은 타입
enum Color {
  Red = 1,
  Green,
  Blue,
}
console.log("enum");
console.log(Color.Red);

let favoriteColor: Color = Color.Blue;
console.log(favoriteColor);

// type : 원하는 타입을 하나 만든 후 이름을 붙일 때 사용. (★)

// 주소를 담는 변수 선언 : 문자, 숫자 허용
// let userAddr: (string|number)
type Addr = string | number;
let userAddr: Addr;

// | (union 연산자)
type status = "idle" | "loading" | "success" | "error";
let currentStatus: status;
currentStatus = "idle";

type Point = {
  x: number;
  y: number;
};

let point: Point = { x: 10, y: 20 };

type PointTuple = [number, number];
const tuple2: PointTuple = [10, 20];

type Name = {
  firstName: string;
  lastName: string;
};

// Employee => firstName, lastName, employeeId

// & : 이미 선언된 타입 사용시
type Employee = Name & {
  employeeId: number;
};

let employee: Employee;

employee = { firstName: "John", lastName: "Doe", employeeId: 1234 };

// type 선언 할 때, 어떤 키가 필요한지 모르고 나중에 추가하고 싶음, 그리고 해당 키 대한 모든 value가 string일 때
// index signature
type Member = {
  [key: string]: string;
};

let member: Member = {
  id: "user01",
  name: "alice",
};

let member2: Member = {
  id: "user01",
  name: "alice",
  addr: "seoul",
};

// 이미 선언된 타입에서 특정 키 제거하고 사용하고 싶을 때 => Omit
type Menu = {
  name: string;
  category: string;
  price: number;
};

// BestMenu 라는 type을 만드는데 name, category만 필요한 경우
// Price 카테고리를 제거하고 사용

type BestMenu = Omit<Menu, "price">;
// category와 price를 제거하는 경우 : Omit<Menu, "price"|"category">;
let menu: Menu = {
  name: "pizza",
  category: "",
  price: 35000,
};
let bestMenu: BestMenu = {
  name: "peperoni pizza",
  category: "",
};

// 이미 선언된 타입에서 특정 키만 사용하고 싶음 : Pick
// Menu에서 category만 필요한경우

type MenuOnlyCategory = Pick<Menu, "category">;

let menuonlycategory: MenuOnlyCategory = {
  category: "",
};

// interface: 객체 타입 지정 시 주로 사용
let user1: object;
user1 = { name: "Alice", age: 25 };
console.log(user1);
// console.log(user1.name);

interface User {
  name: string;
  age: number;
}

let user: User = { name: "David", age: 30 };
console.log(user.age);

// 선택적인 속성을 추가하고자 할 때
// eg) gender
// ? 들어올 수도 있고 아닐수도 있음

interface User2 {
  name: string;
  age: number;
  gender?: string;
}

let user2: User2 = { name: "David", age: 30 };
let user3: User2 = { name: "David", age: 30, gender: "Male" };
user3.name = "Teddy";

interface Car {
  readonly model: string;
  year: number;
}
let car1: Car = {
  model: "Toyota",
  year: 2026,
};
// car1.model = "hyundai" 불가능

interface Member2 {
  [key: string]: string;
}

interface Student {
  name: string;
  id: number;
  [key: number]: string;
}

let student: Student = {
  name: "John",
  id: 12345,
  1: "A",
  2: "B",
};

type Score = "A+" | "A" | "B" | "C" | "D" | "F";

interface Student2 {
  name: string;
  id: number;
  [key: number]: Score;
}

// 함수 타입 정의
type Func1 = {
  (a: number, b: number): number;
};

interface Add {
  (a: number, b: number): number;
}

const add: Add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));

// 인라인 지정
function sub(a: number, b: number): number {
  return a - b;
}

// 인터페이스 확장 (type &)
interface Car2 {
  color: string;
  wheels: number;
  start(): void;
}

// Car2 속성 그대로 구현
class Truck implements Car2 {
  color: string;
  wheels: number;

  constructor(color: string, wheels: number) {
    this.color = color;
    this.wheels = wheels;
  }
  start(): void {
    console.log("Truck started");
  }
  // 본인만의 메서드 추가 가능
  drive(): void {
    console.log("Truck is driving");
  }
}

const myTruck = new Truck("red", 6);
myTruck.start();

interface Person {
  name: string;
  age: number;
}

interface Employee2 extends Person {
  employeeId: number;
  department: string;
}
let employee2: Employee2 = {
  name: "",
  age: 30,
  employeeId: 2001,
  department: "HR",
};

// interface에 type 도 extends 가능
interface BestMenu2 extends Menu {
  rank: number;
}

const best2: BestMenu2 = {
  name: "americano",
  category: "coffee",
  price: 4500,
  rank: 3,
};

interface Menu2 {
  name: string;
  category: string;
  price: string;
}

// type에서 interface 가져다가 사용

type BestMenu3 = Menu2 & {
  rank: number;
};

// as 타입 : type assertion
let someValue: unknown = "This is a string";
let someValueLength = (someValue as string).length;
console.log(someValueLength);
