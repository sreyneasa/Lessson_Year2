"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItem = void 0;
var MenuItem = /** @class */ (function () {
    function MenuItem(name, description, price) {
        this.customers = [];
        this.items = [];
        this.name = name;
        this.description = description;
        this.price = price;
    }
    MenuItem.prototype.additem = function (item) {
        this.items.push(item);
    };
    MenuItem.prototype.getCustomer = function (customer) {
        this.customers.push(customer);
    };
    MenuItem.prototype.setOrder = function (order) {
        this.order = order;
    };
    return MenuItem;
}());
exports.MenuItem = MenuItem;
