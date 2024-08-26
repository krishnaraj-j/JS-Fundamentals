export function multiply(a, b) {
    return a * b
}

export class CustomerDetails {
    /**
     * This method prints the name of the customer
     * @param {string} name 
     */
    printCustomerName(name) {
        console.log(name)
    }

    /**
     * This method prints the age of the customer
     * @param {number} age 
     */
    printCustomerAge(age) {
        console.log(age)
    }
}

export var customerDetails2 = new CustomerDetails()