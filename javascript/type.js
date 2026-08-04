// datatype
// number : int, float
// boolean : true, false
// undefined, null
// number, string, boolean,
let a, b, c, d, e, f;

console.log(typeof a); // undefined

a = 2;
b = "hello";
c = 3.141592;
d = new Date();
e = { name: "hong", age: 20 };
f = null;

console.log("a 타입?", typeof a);
console.log("b 타입?", typeof b);
console.log("c 타입?", typeof c);
console.log("d 타입?", typeof d);
console.log("e 타입?", typeof e);
console.log("f 타입?", typeof f);
e = 1 > 2;
console.log("e 타입?", typeof e);

// operator
// arithmetic operator(+ - * / %)
// comparison operator(==, ===, !=, !==, >, >=, <. <=)
// === , !== perform type conercion
// Unary Opeerator (++, --)
// Assignment operator(+=, -=, *=, /= ...)
// &&(== and) ||(==or)
// Conditional (ternar) operator, condition ? exprIfTrue : exprIfFalse

let z = 14;
let result = (z > 10 && z <= 20) || z % 3 === 0;
console.log(result);

let bool1 = true;
result = bool1 ? "참" : "거짓";
console.log(result);

console.log(z % 2 === 0 ? "짝수" : "홀수");
