function sequence(n, k) {

    let elements = [1];
    
    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = Math.max(0, i - k); j < i; j++) {

            sum += elements[j]          
        }
        elements[i] = sum;
    }
    return elements;
}
console.log(sequence(8, 2));