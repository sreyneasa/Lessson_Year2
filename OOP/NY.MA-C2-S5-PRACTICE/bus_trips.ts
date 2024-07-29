class Trips {
    bus_name: string;
    departure_place: string;
    arrival_place: string;
    customers: Customer[] = [];

    constructor(bus_name: string, departure_place: string, arrival_place: string, customers: Customer[]){
        this.bus_name = bus_name;
        this.departure_place = departure_place;
        this.arrival_place = arrival_place;
        this.customers = customers;
    }

    AddCustomer(customer: Customer){
        this.customers.push(customer);
    }
}

class Customer {
    first_name: string;
    last_name: string;
    addresses: Address[] = [];

    constructor(first_name: string, last_name: string){
        this.first_name = first_name;
        this.last_name = last_name;
    }

    AddAddress(address: Address){
        this.addresses.push(address);
    }
}

class Address {
    city: string;
    street: string;

    constructor(city: string, street: string){
        this.city = city;
        this.street = street;
    }
}

const customer1 = new Customer('Ronan', 'Of');
const customer2 = new Customer('Him', 'Hey');
const customer3 = new Customer('Sovanda', 'phal');

const address1 = new Address('paris','usa');
const address2 = new Address('KC','us');
const address3 = new Address('KPT','kanada');

customer1.AddAddress(address1);
customer2.AddAddress(address2);
customer3.AddAddress(address3);

let myTrips = new Trips('good', 'job', 'liuck', [customer1, customer2, customer3]);

console.log(myTrips.customers);
