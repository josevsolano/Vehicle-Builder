import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import Car from './Car.js';
import Motorbike from './Motorbike.js';

class Truck extends Vehicle implements AbleToTow {
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];
    towingCapacity: number;

    constructor(
        vin: string,
        color: string,
        make: string,
        model: string,
        year: number,
        weight: number,
        topSpeed: number,
        wheels: Wheel[] = [],
        towingCapacity: number
    ) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;

        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        } else {
            this.wheels = wheels;
        }
    }

    tow(vehicle: Truck | Motorbike | Car): void {
        const vehicleWeight = vehicle.weight;
        if (vehicleWeight <= this.towingCapacity) {
            console.log(`Towing ${vehicle.make} ${vehicle.model}.`);
        } else {
            console.log(`The vehicle is too heavy to tow.`);
        }
    }

    override printDetails(): void {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} lbs`);
        console.log(`Top Speed: ${this.topSpeed} mph`);
        console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
        console.log(
            `Wheels: ${this.wheels.map((wheel, i) => `Wheel ${i + 1}: ${wheel.getDiameter}" - ${wheel.getTireBrand}`).join(', ')}`
        );
    }
}

export default Truck;
