"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(id, name) {
        this.customer = [];
        this.orders = [];
        this.id = id;
        this.name = name;
    }
    Customer.prototype.getOrdersByCustomer = function (customer) {
        return customer.orders;
    };
    return Customer;
}());
exports.Customer = Customer;
