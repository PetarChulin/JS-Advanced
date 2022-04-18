function limit(speed, area) {

    let status = '';
    let speedLimit = '';

    let speedInfo = function () {
        let speedExceeded = speed - speedLimit;
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        } else if (speedExceeded <= 20) {
            status = 'speeding';
            console.log(`The speed is ${speedExceeded} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else if (speedExceeded <= 40) {
            status = 'excessive speeding';
            console.log(`The speed is ${speedExceeded} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        } else {
            status = 'reckless driving';
            console.log(`The speed is ${speedExceeded} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            speedInfo();
            break;
        case 'interstate':
            speedLimit = 90;
            speedInfo();
            break;
        case 'city':
            speedLimit = 50;
            speedInfo();
            break;
        case 'residential':
            speedLimit = 20;
            speedInfo();
            break;
    }
}
limit(21, 'residential');