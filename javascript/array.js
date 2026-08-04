// 배열 == 파이썬 리스트
// 배열의 값으로는 제한이 없다
let arr1 = new Array();
let arr2 = ["a", "b", 1, 2, 1.5, true];
console.log(arr1, arr1.length);
console.log(arr2, arr2.length);
console.log(arr2[1]);

// 배열 함수
// 1. push(): 뒤에 추가

arr1.push(25);
arr1.push(35);
arr1.push(45);
console.log(arr1);

// 2. unshift(): 앞에 추가
arr1.unshift("복숭아");
console.log(arr1, arr1.length);

arr1[1] = "사과";
console.log(arr1, arr1.length);

// 3. pop(): 마지막 요소를 제거 후 리턴
arr1.pop();
console.log(arr1, arr1.length);
// 4. shift(): 맨 앞 요소 제거 후 리턴
arr1.shift();
console.log(arr1, arr1.length);

// 5. join("연결문자열"): 각각의 요소를 연결문자열로 연결
console.log(arr2.join("-"));
// 6. concat() : 다른 배열과 합치기
console.log(arr2.concat(arr1));
// 7. slice(시작, 끝) : 끝위치 포함안하고 자르고 새 배열 반환(원본변경 x)
console.log(arr2.slice(1, 3));
// 8. sort(): 요소를 문자열로 변환해서 정렬, (원본변경 o)
console.log(arr2.sort());
// 9. indexOf(찾고자하는요소): 요소가 있으면 index반환, 없으면 -1 반환.
console.log("1위치 찾기", arr2.indexOf(1));

// 복사(얕은복사, 깊은복사)
console.log("=== 얕은복사 ===");
let arr3 = arr2;
console.log("arr2", arr2);
console.log("arr3", arr3);

arr3[1] = 33;
console.log("arr2", arr2);
console.log("arr3", arr3);

console.log("===깊은복사(값 복사)===");
// ... :spread
arr3 = [...arr2];
arr3[2] = 42;
console.log("arr2", arr2);
console.log("arr3", arr3);

let varArr1 = ["num1", "num2"];
let varArr2 = ["num3", "num4"];

let sumLetArr = [...varArr1, ...varArr2];
console.log(sumLetArr);

const fruits = new Array("사과", "망고", "바나나", "수박");
fruits.forEach((i) => console.log(i));
