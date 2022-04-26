function solve(array) {

    let count = 0;
    length = array.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < array[i].length; j++) {

            if (array[i][j] == array[i + 1][j]) {
                count++;
            }
            if (array[i][j] == array[i][j + 1]) {
                count++;
            }
            if (i == length - 2 && array[i + 1][j] == array[i + 1][j + 1]) {
                count++;
            }
        }
    }
    console.log(count);
}
solve([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);
