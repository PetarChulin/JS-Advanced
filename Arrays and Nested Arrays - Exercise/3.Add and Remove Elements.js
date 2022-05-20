function addRemove(array) {

    let newArray = [];
    let counter = 0;
    
    for (const element of array) {
        counter++;
        if (element == 'add') {
            newArray.push(counter);
        } else if (element == 'remove') {
            newArray.pop(counter);
        }
    }
    if (newArray.length == 0) {
        console.log('Empty');
    }
    newArray.forEach(element => { console.log(element) });
}
addRemove(['add', 'add', 'add', 'add']);