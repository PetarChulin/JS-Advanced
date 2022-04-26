function sortBiggerHalf(numbers) {

    let biggest = [];

    let length = numbers.length;

    let biggerHalf = function() {
        for (let i = 0; i < length; i++) {
            let max = Math.max(...numbers);
            biggest.push(max)
            numbers.splice(numbers.indexOf(max), 1);
        }
    }

    if (length % 2 == 0) {
        length = length / 2
        biggerHalf();
    } else {
        length = (length / 2) + 0.5;
        biggerHalf();
    }
    return biggest.sort((a, b) => a - b);
}
sortBiggerHalf([4, 7, 2, 5]);