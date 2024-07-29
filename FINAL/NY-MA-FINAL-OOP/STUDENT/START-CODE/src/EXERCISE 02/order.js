"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var Order = /** @class */ (function () {
    // public items: MenuItem[] = [];
    function Order(order_item, total_price, customer) {
        this.customer = [];
        this.order_item = order_item;
        this.total_price = total_price;
    }
    Order.prototype.placeOrder = function (customer, items) {
        this.customer.push(customer);
        // this.customer.push(items);
    };
    return Order;
}());
exports.Order = Order;
