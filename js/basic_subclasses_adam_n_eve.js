class God {
    constructor(name) {
        this.name = name;
    }
    static create() {
        return [new Man('Adam'), new Woman('Eve')];
    }
}

class Human extends God {
    constructor(name) {
        super(name);
    }
}
class Man extends Human {
    constructor(name) {
        super(name);
    }
}
class Woman extends Human {
    constructor(name) {
        super(name);
    }
}

let humans = God.create();
console.log(humans);