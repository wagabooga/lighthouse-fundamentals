const isEven  = function (num) {
  return num % 2 === 0;
}
/* notes

In the above isEven function, num can vary and therefore so will the result of num % 2 === 0. If num is even, the result of num % 2 is 0 and so the whole expression evaluates to true. The opposite happens when num is odd.

The final missing piece is the return statement. After evaluating the expression to true or false, the function returns this value where it's called.

*/
// full example
const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);


console.log(tenIsEven);
console.log(elevenIsEven);

// easier func
const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));