function addRemove(array) {

    let newArray = [];
    let counter = 0;

    for (const element of array) {
        counter++;
        element == 'add' ? newArray.push(counter) : null;
        element == 'remove' ? newArray.pop(counter) : null;
    }
    newArray.length == 0 ? console.log('Empty') : null;
    newArray.forEach(element => { console.log(element) });
}
addRemove(['add', 'add', 'add', 'add']);
