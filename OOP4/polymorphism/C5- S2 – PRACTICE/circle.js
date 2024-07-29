"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(leftX, bottomY, radius) {
        var _this = _super.call(this, leftX, bottomY) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getWidth = function () {
        return this.radius * 2;
    };
    Circle.prototype.getHeight = function () {
        return this.radius * 2;
    };
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape_1.default));
exports.default = Circle;
