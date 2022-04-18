function compare(input) {

    let numbers = input.toString();
    let isEqual = true;
    let sum = 0;


    for (let i = 0; i < numbers.length; i++) {
        sum += Number(numbers[i]);
        if (numbers[0] !== numbers[i]) {
            isEqual = false;
        }
    }
    console.log(isEqual);
    console.log(sum);
}
compare(2222222);