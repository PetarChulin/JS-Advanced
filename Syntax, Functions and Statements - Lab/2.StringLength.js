function solve (name1 , name2 , name3) {

let name1L = name1.length;
let name2L = name2.length;
let name3L = name3.length;

let sum = name1L + name2L + name3L;

console.log(sum);
console.log(Math.floor(sum/3));
}
solve('pasta', '5', '22.3');
