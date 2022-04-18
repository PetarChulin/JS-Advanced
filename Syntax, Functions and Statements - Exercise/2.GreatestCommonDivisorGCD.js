function division(a, b) {

    let divisor = 0;

    let smallerNumber = Math.min(a, b);

    for (let i = 0; i <= smallerNumber; i++) {

        if (a % i == 0 && b % i == 0) {
            divisor = i;
        }
    }
    console.log(divisor);
}
division(15,5);