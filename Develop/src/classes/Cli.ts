import inquirer, { Answers } from 'inquirer';

class Cli {
    vehicles: any[];

    constructor(vehicles: any[]) {
        this.vehicles = vehicles;
    }

    // Static method to generate a random VIN
    static generateVin(): string {
        return Math.random().toString(36).substring(2, 15).toUpperCase();
    }

    // Starts the CLI to interact with the user
    startCli(): void {
        console.log("Welcome to the Vehicle CLI!");
        this.showMenu();
    }

    // Displays a menu for the user
    private showMenu(): void {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'action',
                    message: 'What would you like to do?',
                    choices: [
                        'View all vehicles',
                        'Add a new vehicle',
                        'Exit'
                    ]
                }
            ])
            .then((answers: Answers) => {
                switch (answers['action']) {
                    case 'View all vehicles':
                        this.viewVehicles();
                        break;
                    case 'Add a new vehicle':
                        this.addVehicle();
                        break;
                    case 'Exit':
                        console.log('Goodbye!');
                        break;
                }
            });
    }

    // Displays all vehicles in the system
    private viewVehicles(): void {
        console.log("\nCurrent Vehicles:");
        this.vehicles.forEach((vehicle, index) => {
            console.log(`${index + 1}. ${vehicle.constructor.name}: ${vehicle.brand} ${vehicle.model}`);
        });
        console.log("\n");
        this.showMenu();
    }

    // Adds a new vehicle to the system
    private addVehicle(): void {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: 'What type of vehicle would you like to add?',
                    choices: ['Car', 'Truck', 'Motorbike']
                },
                {
                    type: 'input',
                    name: 'brand',
                    message: 'Enter the brand of the vehicle:'
                },
                {
                    type: 'input',
                    name: 'model',
                    message: 'Enter the model of the vehicle:'
                },
                {
                    type: 'number',
                    name: 'year',
                    message: 'Enter the year of the vehicle:'
                }
            ])
            .then((answers: Answers) => {
                const { type, brand, model, year } = answers;
                let newVehicle: any;

                switch (type) {
                    case 'Car':
                        newVehicle = {
                            vin: Cli.generateVin(),
                            color: 'white',
                            brand,
                            model,
                            year,
                            weight: 3000,
                            speed: 120,
                            wheels: []
                        };
                        break;
                    case 'Truck':
                        newVehicle = {
                            vin: Cli.generateVin(),
                            color: 'black',
                            brand,
                            model,
                            year,
                            weight: 5000,
                            speed: 100,
                            wheels: [],
                            towingCapacity: 15000
                        };
                        break;
                    case 'Motorbike':
                        newVehicle = {
                            vin: Cli.generateVin(),
                            color: 'red',
                            brand,
                            model,
                            year,
                            weight: 500,
                            speed: 150,
                            wheels: []
                        };
                        break;
                }

                this.vehicles.push(newVehicle);
                console.log("\nVehicle added successfully!");
                this.showMenu();
            });
    }
}

export default Cli;
