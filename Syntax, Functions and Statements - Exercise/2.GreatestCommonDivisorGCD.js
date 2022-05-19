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
// variant 2
// function solve(a, b) {

//     while (a != b) { a > b ? a -= b : b -= a }
//     console.log(a);
// }
solve(2154, 458);
division(15,5);
