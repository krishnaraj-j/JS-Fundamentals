// Declarative function -> Can be called before func definition
sayHello()
function sayHello() {
    console.log('Hello World! 1')
}


// Anonymous function -> Cannot be called before func definition!
var helloTwo = function () {
    console.log('Hello World! 2')
}
helloTwo()

// ES6 function syntax
var helloThree = () => {
    console.log('Hello World! 3')
}
helloThree()

// Passing arguments and returning values
function add(a, b) {
    return a + b
}
console.log(add(12, 15))

// importing functions
import { multiply } from "../helpers/multiplyHelper.js"
console.log(multiply(2, 6))

// import all
import * as helper from "../helpers/multiplyHelper.js"
console.log(helper.multiply(8, 6))