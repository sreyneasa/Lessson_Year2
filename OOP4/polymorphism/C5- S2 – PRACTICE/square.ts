import Shape from "./Shape";

class Square extends Shape {
    private size: number;

    constructor(leftX: number, bottomY: number, size: number) {
        super(leftX, bottomY);
        this.size = size;
    }

    getWidth(): number {
        return this.size;
    }

    getHeight(): number {
        return this.size;
    }

    getArea(): number {
        return this.size * this.size;
    }
}

export default Square;

