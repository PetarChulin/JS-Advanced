function solve(numbers) {

    let array = [];
    let text = '';

    for (let i = 0; i < numbers.length; i++) {

        if (i % 2 != 0) {

            array.push(numbers[i] * 2);
        }
    }
    array.reverse();
    text = array.join(' ');
    console.log(text);
}
solve([3, 0, 10, 4, 7, 3]);