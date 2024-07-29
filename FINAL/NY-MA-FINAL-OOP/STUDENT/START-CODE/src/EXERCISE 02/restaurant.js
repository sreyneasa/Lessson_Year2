"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = void 0;
var Restaurant = /** @class */ (function () {
    function Restaurant(name, address) {
        this.items = [];
        this.name = name;
        this.address = address;
    }
    Restaurant.prototype.addMenu = function (item) {
        this.items.push(item);
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
