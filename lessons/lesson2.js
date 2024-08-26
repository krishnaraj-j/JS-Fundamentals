// Concatenation and Interpolation
var item = "Shirt"
var price = 50
var message = "The value of your " + item + " is " + price + " dollars" //concatenation
var message2 = `The value of your ${item} is ${price} dollars` //interpolation
console.log(message)
console.log(message2)