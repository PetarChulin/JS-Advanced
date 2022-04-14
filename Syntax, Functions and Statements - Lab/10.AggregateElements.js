function aggregate(arrOfNum) {

let sum = 0;
let sumInverse = 0;
let temp = '';

arrOfNum.forEach(element => { sum += element; });
console.log(sum);

arrOfNum.forEach(element => { sumInverse += (1/element); });
console.log(sumInverse);

arrOfNum.forEach(element => { temp += element+''});
console.log(temp);
}
aggregate([1, 2, 3]);
