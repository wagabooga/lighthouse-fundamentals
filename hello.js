/* basic func 
const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();
*/


const sayHello  = function (name) {
  console.log("Hello, " + name);
}
sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

/* console.log approach

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); 

*/

/* return approach

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');

*/