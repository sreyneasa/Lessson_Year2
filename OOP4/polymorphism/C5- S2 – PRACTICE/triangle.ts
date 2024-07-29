import Shape from "./Shape";

class Triangle extends Shape {
    private base: number;
    private height: number;

    constructor(leftX: number, bottomY: number, base: number, height: number) {
        super(leftX, bottomY);
        this.base = base;
        this.height = height;
    }

    getWidth(): number {
        return this.base;
    }

    getHeight(): number {
        return this.height;
    }

    getArea(): number {
        return (this.base * this.height) / 2;
    }
}

export default Triangle;
