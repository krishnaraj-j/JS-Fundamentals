// method 1
import { CustomerDetails } from "../helpers/multiplyHelper.js"

var customerDetails = new CustomerDetails()
customerDetails.printCustomerName("Krishna")
customerDetails.printCustomerAge(23)

// method 2 - init can be done on the same file where class is defined, just import the object
import { customerDetails2 } from "../helpers/multiplyHelper.js"
customerDetails2.printCustomerName("Krishnaraj")
customerDetails2.printCustomerAge(23)