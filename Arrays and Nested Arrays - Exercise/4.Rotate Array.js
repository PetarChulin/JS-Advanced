function rotate(array , amount) {

    let line = '';

    for (let i = 0; i < amount; i++) {
        
        array.unshift(array.pop());
    }  
    console.log(line = array.join(' '));
}
rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 
15);
