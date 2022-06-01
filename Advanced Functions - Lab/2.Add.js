function solution(num) {

    function add(a, b) { 
        return a + b; }

    return add.bind(0, num);
}
// let add5 = solution(5);

console.log(solution(10)(2));
console.log(solution(5)(3));
console.log(solution(5)(5));
