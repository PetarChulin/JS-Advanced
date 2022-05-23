function extract(array) {

    let newArray = [];
    let max = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] >= max) {
            max = array[i];
            newArray.push(max);
        }
    }
    return newArray;
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
