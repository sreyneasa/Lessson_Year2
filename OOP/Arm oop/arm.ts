class Man {
    leftArm: Arm = new Arm(true);
    rightArm: Arm = new Arm(false);
}

class Arm {
    isLeft: boolean;

    constructor (isLeft: boolean){
        this.isLeft = isLeft;
    }
}

let person = new Man();

console.log("Left arm:", person.leftArm);
console.log("Right arm:", person.rightArm);
