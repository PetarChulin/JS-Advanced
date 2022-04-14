function solve (n1,n2,n3){
let result;

if (n1 > n2 && n1 > n3) {
    result = n1;
} else if (n2 > n1 && n2 > n3) {
    result = n2;
} else {
    result = n3;
    }
    console.log('The largest number is ' + result + '.');
}
solve(-3, -5, -22.5);