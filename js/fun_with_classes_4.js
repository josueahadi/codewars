class Cube {
    constructor(length) {
        this.length = length;
    }
    get surfaceArea() {
        return 6 * Math.pow(this.length, 2);
    }
    set surfaceArea(area) {
        this.length = Math.sqrt(area / 6);
    }
    get volume() {
        return Math.pow(this.length, 3);
    }
    set volume(volume) {
        this.length = Math.cbrt(volume);
    }
}