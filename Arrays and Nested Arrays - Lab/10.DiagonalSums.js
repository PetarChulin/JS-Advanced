function solve(array) {

    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < array.length; i++) {

        leftSum += array[i][i];
        rightSum += array[i][array.length - i - 1];

    }
    console.log(leftSum + ' ' + rightSum);
}
solve([[20, 40], [10, 60]]);