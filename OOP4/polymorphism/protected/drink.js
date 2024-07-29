var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Drink = /** @class */ (function () {
    function Drink(name, price) {
        this.name = name;
        this.price = price;
    }
    Drink.prototype.getName = function () {
        return this.name;
    };
    Drink.prototype.getPrice = function () {
        return this.price;
    };
    return Drink;
}());
var Coffee = /** @class */ (function (_super) {
    __extends(Coffee, _super);
    function Coffee(name, price, coffee) {
        var _this = _super.call(this, name, price) || this;
        _this.coffee = coffee;
        return _this;
    }
    Coffee.prototype.getCoffee = function () {
        return this.coffee;
    };
    return Coffee;
}(Drink));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(name, price, orange) {
        var _this = _super.call(this, name, price) || this;
        _this.orange = orange;
        return _this;
    }
    Orange.prototype.getOrange = function () {
        return this.orange;
    };
    return Orange;
}(Drink));
var orangeJuice = new Orange('lemonet', 20, 'green tea');
var coffees = new Coffee('capogino', 15, 'amazon');
console.log(orangeJuice.getName(), orangeJuice);
console.log(coffees.getCoffee(), coffees);
