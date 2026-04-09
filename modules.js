const C = require("./test-module");
const calc = new C();
console.log(calc.add(2, 5));

const { add, multiply } = require("./test-module2");
console.log(add(2, 5));
console.log(multiply(2, 5));
