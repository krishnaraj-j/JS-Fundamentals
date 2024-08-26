// Objects

var customer = {
    firstName: 'Krishnaraj',
    lastName: 'Jayachandran'
}

console.log(customer)
console.log(customer.firstName, customer.lastName)

// Dot notation
customer.firstName = 'Krishna'
// Bracket notation
customer['lastName'] = 'J'

console.log(`${customer.firstName} ${customer['lastName']}`)

// Arrays
customer.cars = ["Tesla", "Honda", "Tata"]
console.log(customer)
console.log(customer.cars[0])
customer.cars[1] = "Skoda"
console.log(customer.cars)