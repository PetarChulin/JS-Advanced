function rotate(array , amount) {
 
    for (let i = 0; i < amount; i++) {        
        array.unshift(array.pop());
    }  
    console.log(array.join(' '));
}
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 
15);
