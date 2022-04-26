function solve(array) {

    let smallest = [];
    let text = '';
    for (let i = 0; i < 2; i++) {
        
        let min = Math.min(...array);
        smallest.push(min);
        text += String(min  + ' ');
        array.splice(array.indexOf(min) , 1);             
    }
      
console.log(text);
}
solve([3, 0, 10, 4, 7, 3]);

// function sumTwoSmallestNumbers(numbers) {  
//   numbers = numbers.sort((a, b) => {
//     return a - b; });
// }; 