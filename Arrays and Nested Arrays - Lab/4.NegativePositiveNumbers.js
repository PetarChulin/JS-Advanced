function solve(array) {

    let result = [];

    array.forEach(e => {if (e < 0) {result.unshift(e)} else{ result.push(e)}});

    result.forEach(e => console.log(e));
}
solve([7, -2, 8, 9]);