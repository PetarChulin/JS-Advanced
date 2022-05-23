function offer(car) {

    let model = car.model;
    let power = Number(car.power);
    let color = car.color;
    let wheelsize = Number(car.wheelsize);

    let smallEngine = { power: 90, volume: 1800 };
    let normalEngine = { power: 120, volume: 2400 };
    let monsterEngine = { power: 200, volume: 3500 };

    let hatchback = { type: 'hatchback', color: car.color }
    let coupe = { type: 'coupe', color: car.color }

    let orderedCar = {};

    orderedCar.model = car.model;
    if (car.power <= 90) {
        orderedCar.engine = smallEngine;
    } else if (car.power > 90 && car.power <= 120) {
        orderedCar.engine = normalEngine;
    } else {
        orderedCar.engine = monsterEngine;
    }

    car.carriage == 'hatchback' ? orderedCar.carriage = hatchback : orderedCar.carriage = coupe;

    let tyres = Array(4);
    car.wheelsize % 2 == 0 ? orderedCar.wheels = tyres.fill(car.wheelsize - 1) : orderedCar.wheels = tyres.fill(car.wheelsize);

    return orderedCar;
}
offer({
    model: 'VW Golf II', power: 90, color: 'blue', carriage: 'hatchback', wheelsize: 14
});