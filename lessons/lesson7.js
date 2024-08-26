// Loops
/*
Syntax:
for(init; condition; updation) {
    //code
}
*/
cars = ["Tata", "Tesla", "Benz", "Rolls Royce"]
console.log(`for loop (for i loop)`)
for (let i = 0; i < 4; i++) {
    console.log(cars[i])
}

console.log(`for of loop`)
for (let car of cars) {
    console.log(car)
}

console.log(`ES6 syntax for each loop`)
cars.forEach(car => {
    console.log(car)
});