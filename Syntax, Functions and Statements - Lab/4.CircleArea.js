function area (input) {

    let circleArea;

    if (typeof input == 'number') {
    circleArea = Math.PI * input**2;
    console.log(circleArea.toFixed(2));
    } else {
        console.log('We can not calculate the circle area, because we receive a ' + typeof(input) + '.')
    }
}
area('name');