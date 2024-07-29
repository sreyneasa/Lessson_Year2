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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, phone) {
        var _this = _super.call(this, name, age) || this;
        _this.phone = phone;
        return _this;
    }
    return Student;
}(Person));
var School = /** @class */ (function () {
    function School(name) {
        this.name = name;
    }
    return School;
}());
var Class = /** @class */ (function () {
    function Class(name) {
        this.name = name;
    }
    return Class;
}());
var my_enum;
(function (my_enum) {
    my_enum[my_enum["A"] = 0] = "A";
    my_enum[my_enum["B"] = 1] = "B";
    my_enum[my_enum["C"] = 2] = "C";
    my_enum[my_enum["D"] = 3] = "D";
})(my_enum || (my_enum = {}));
var myClass = /** @class */ (function () {
    function myClass() {
    }
    myClass.prototype.myAttribute = function () {
        return 0;
    };
    return myClass;
}());
var MyClass_Child = /** @class */ (function (_super) {
    __extends(MyClass_Child, _super);
    function MyClass_Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyClass_Child.prototype.myAttribute = function () {
        return 1;
    };
    return MyClass_Child;
}(myClass));
var student = new Student('Sreyny', 20, '0976543');
console.log(student);
var school = new School('PNC');
console.log(school);
var class1 = new Class(my_enum.A);
console.log(class1);
