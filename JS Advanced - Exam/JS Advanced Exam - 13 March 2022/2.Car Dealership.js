class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (!model == '' && (Number.isInteger(horsepower) && horsepower >= 0) && Number(price >= 0) && Number(mileage >= 0)) {
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        } else {
            throw new Error(`Invalid input!`);
        }

    }
    sellCar(model, desiredMileage) {

        let car = this.availableCars.find(c => c.model == model);
       
        if (!car) {
            throw new Error(`${model} was not found!`);
        }
        let soldPrice;
        if (car.mileage <= desiredMileage) {
            soldPrice = car.price;
        }
        else if (car.mileage - desiredMileage <= 40000) {
            soldPrice = car.price * 0.95;
        }
        else if (car.mileage - desiredMileage > 40000) {
            soldPrice = car.price * 0.90;
        }

        let soldCar = this.availableCars.indexOf(car);
        this.availableCars.splice(soldCar, 1);
        this.soldCars.push({ model, horsepower: car.horsepower, price: soldPrice });
        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`


    }
    currentCar() {
        if (this.availableCars.length === 0) {

            return `There are no available cars`;
        } else {
            let inStore = [];
            inStore.push("-Available cars:");
            this.availableCars.forEach(cars => inStore.push(`---${cars.model} - ${cars.horsepower} HP - ${cars.mileage.toFixed(2)} km - ${cars.price.toFixed(2)}$`));

            return inStore.join('\n');
        }
    }
    salesReport(criteria) {
        let sortedByCriteria = [];
        let report = [];
        if (criteria != 'horsepower' && criteria != 'model') {
            throw new Error(`Invalid criteria!`);
        } else {
            if (criteria == 'horsepower') {
                sortedByCriteria = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
            } else if (criteria == 'model') {
                sortedByCriteria = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
            }
        }
        report.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        report.push(`-${this.soldCars.length} cars sold:`);
        sortedByCriteria.forEach(sold => report.push(`---${sold.model} - ${sold.horsepower} HP - ${sold.price.toFixed(2)}$`));
        return report.join('\n');
    }

}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));






