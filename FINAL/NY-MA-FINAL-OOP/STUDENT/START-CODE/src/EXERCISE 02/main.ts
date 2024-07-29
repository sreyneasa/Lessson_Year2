import { MenuItem } from './menuItem';
import { Customer } from './customer';
import { Order } from './order';
import { Restaurant } from './restaurant';

let customer1 = new Customer(1,'cha');
let customer2 = new Customer(2,'nyny');

let order1 = new Order("snack",1,'kokari');
let order2 = new Order("fir",2,'yummy');

let menuItem1 = new MenuItem("pizza", "good", 10);
let menuItem2 = new MenuItem ("cheese", "nice",9)

menuItem1.getCustomer(customer1);
menuItem2.getCustomer(customer2);

menuItem1.setOrder(order1);
menuItem2.setOrder(order2);

let restaurant = new Restaurant("Kimo","Phom Penh");

restaurant.addMenu(menuItem1);
restaurant.addMenu(menuItem2);

console.log(restaurant);

