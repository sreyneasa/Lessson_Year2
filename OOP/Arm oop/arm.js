var Man = /** @class */ (function () {
    function Man() {
        this.leftArm = new Arm(true);
        this.rightArm = new Arm(false);
    }
    return Man;
}());
var Arm = /** @class */ (function () {
    function Arm(isLeft) {
        this.isLeft = isLeft;
    }
    return Arm;
}());
var person = new Man();
console.log("Left arm:", person.leftArm);
console.log("Right arm:", person.rightArm);
