class Cuboid {
    constructor(length = 1, width = 1, height = 1) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    get surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
    get volume() {
        return this.length * this.width * this.height
    }
}


class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
        this.length = length;
    }
}

// Tests
var cube = new Cube(1);
console.log(cube.length);
console.log(cube.width);
console.log(cube.height);
console.log(cube.volume);
console.log(cube.surfaceArea)