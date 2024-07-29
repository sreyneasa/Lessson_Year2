import { Address } from "./Address";
import { Customer } from "./Customer";
import { Hotel } from "./Hotel";
import { Room } from "./Room";

// create an address object
const address = new Address("Phone Penh City", "123 Main Street", "Cambodai");
const address2 = new Address("Kompot", "123 Main Street", "Cambodai");

// create a customer object
const customer = new Customer("Yen", "Yon", address);

// create a room object
const room = new Room("B32", 3, [customer]);

// create a hotel object
const hotel = new Hotel("The Plaza", address,[room]);

// test the isEqual method for the Address class
const otherAddress = new Address("Phone Penh City", "123 Main Street", "Cambodai");
console.log(address.isEqual(otherAddress)); // true

//crete new customer object
let customer1 = new Customer("Ya","Ye",address2)
console.log(customer.isEqual(customer1)); // fale

//test room object
console.log(room.CheckCustomer(customer));//true
console.log(room.CheckCustomer(customer1));//fale


// test the customerIsInHotel method for the hotel class
const otherCustomer = new Customer("Him", "Hey", address);
room.addCustomer(otherCustomer);
console.log(hotel.customerIsInHotel(customer)); // true
console.log(hotel.customerIsInHotel(otherCustomer)); // true

// test the registerCustomer method for the hotel class
const thirdCustomer = new Customer("Rady", "Y", address);
console.log(hotel.registerCustomer(thirdCustomer, room)); // true
console.log(hotel.registerCustomer(customer, room)); // false (customer is already in the room)
console.log(hotel.registerCustomer(thirdCustomer, room)); // false (room is full)