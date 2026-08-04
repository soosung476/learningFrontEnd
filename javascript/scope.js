// how to name variables
// english, number, &_
// can't start with number
// can't use spaces
// can't use keyword

// variable scope
// block ({}) scope
// function scope
const foobar = () => {
  var foo = 5;
  console.log(foo);
};
// console.log(foo); //ReferenceError: foo is not defined

{
  var a = 5;
}
console.log(a);

{
  //local variable
  let value1 = 7;
}
//console.log(value1); //ReferenceError: value1 is not defined

{
  let value2 = 7;
}
let value2 = 10;

console.log(value2);

const value3 = 9;
{
  //   const value3 = 20;
  console.log(value3);
}
console.log(value3);
