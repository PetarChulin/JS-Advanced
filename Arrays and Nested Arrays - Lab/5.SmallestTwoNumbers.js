function solve(array) {

    let smallestTwo = array.sort((a, b) => a - b).splice(0, 2).join(' ');

    console.log(smallestTwo);
}
solve([3, 0, 10, 4, 7, 3]);
