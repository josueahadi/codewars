class Cube {
    constructor(length) {
        this._length = length;
    }

    get length() {
        return this._length;
    }

    set length(value) {
        if (value <= 0) {
            throw new Error("Length must be a positive number");
        }
        this._length = value;
    }

    get surfaceArea() {
        let area = 6 * Math.pow(this._length, 2);
        return area;
    }

    set surfaceArea(area) {
        this._length = Math.sqrt(area / 6);
    }

    get volume() {
        let volume = Math.pow(this._length, 3);
        return volume;
    }

    set volume(volume) {
        this._length = Math.cbrt(volume);
    }

}