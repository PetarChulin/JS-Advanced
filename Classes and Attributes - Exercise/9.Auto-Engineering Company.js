function solve(array) {

    let cars = {};

    array.forEach(car => {
        
        let [brand, model, qty] = car.split(' | ');
        qty = Number(qty);
        !cars[brand] ? cars[brand] = {} : null;
        
        !cars[brand][model] ? cars[brand][model] = qty : cars[brand][model] += qty;
    }); 

    
    for (let brand in cars) {
        console.log(brand);
        Object.entries(cars[brand]).forEach(m => console.log('###' + m[0] + ' -> ' + m[1]))
    } 
}
solve(['Audi | Q7 | 1000',
'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'Audi | Q5 | 1010',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);
