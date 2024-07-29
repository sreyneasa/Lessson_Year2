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
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(leftX, bottomY, base, height) {
        var _this = _super.call(this, leftX, bottomY) || this;
        _this.base = base;
        _this.height = height;
        return _this;
    }
    Triangle.prototype.getWidth = function () {
        return this.base;
    };
    Triangle.prototype.getHeight = function () {
        return this.height;
    };
    Triangle.prototype.getArea = function () {
        return (this.base * this.height) / 2;
    };
    return Triangle;
}(Shape_1.default));
exports.default = Triangle;
