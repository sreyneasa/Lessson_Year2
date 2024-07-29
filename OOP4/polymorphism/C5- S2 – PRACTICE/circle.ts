import Shape from "./Shape";

class Circle extends Shape {
    private radius: number;

    constructor(leftX: number, bottomY: number, radius: number) {
        super(leftX, bottomY);
        this.radius = radius;
    }

    getWidth(): number {
        return this.radius * 2;
    }

    getHeight(): number {
        return this.radius * 2;
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

export default Circle;
