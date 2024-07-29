var Trips = /** @class */ (function () {
    function Trips(bus_name, departure_place, arrival_place, customers) {
        this.customers = [];
        this.bus_name = bus_name;
        this.departure_place = departure_place;
        this.arrival_place = arrival_place;
        this.customers = customers;
    }
    Trips.prototype.AddCustomer = function (customer) {
        this.customers.push(customer);
    };
    return Trips;
}());
var Customer = /** @class */ (function () {
    function Customer(first_name, last_name) {
        this.addresses = [];
        this.first_name = first_name;
        this.last_name = last_name;
    }
    Customer.prototype.AddAddress = function (address) {
        this.addresses.push(address);
    };
    return Customer;
}());
var Address = /** @class */ (function () {
    function Address(city, street) {
        this.city = city;
        this.street = street;
    }
    return Address;
}());
var customer1 = new Customer('Ronan', 'Of');
var customer2 = new Customer('Him', 'Hey');
var customer3 = new Customer('Sovanda', 'phal');
var address1 = new Address('paris', 'usa');
var address2 = new Address('KC', 'us');
var address3 = new Address('KPT', 'kanada');
customer1.AddAddress(address1);
customer2.AddAddress(address2);
customer3.AddAddress(address3);
var myTrips = new Trips('good', 'job', 'liuck', [customer1, customer2, customer3]);
console.log(myTrips.customers);
