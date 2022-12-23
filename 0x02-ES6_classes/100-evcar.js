import Car from "./10-car";
export default class EVCar extends Car {
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }

    set range(range) {
        if (typeof range !== 'string') {
            throw new TypeError('range must be a string');
        }
    }

    get range() {
        return this._range;
    }

    cloneCar() {
        return new Car();
    }
}