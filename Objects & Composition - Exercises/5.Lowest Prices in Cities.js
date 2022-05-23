function lowestPrices(input) {

    let lines = [];

    let products = {};
        
    for (const line of input) {

        town = line.split(' | ')[0];
        product = line.split(' | ')[1];
        price = Number(line.split(' | ')[2]);

        if (product in products) {
            if (price < products[product].price) {
                products[product].price = price;
                products[product].town = town;
            }
        }
        else {
            let obj = {};
            obj.price = price;
            obj.town = town;
            products[product] = obj;
            lines.push(product);
        }
    }
    lines.forEach(e => console.log(e + ' -> ' + products[e].price + ' ' + '(' + products[e].town + ')'));
}



// lines.forEach(e => { products.push(e.product) });

// let counts = [];

// counts = products.reduce((array, value) => ({
//     ...array, [value]: (array[value] || 0) + 1 }), []);

// let result = [...new Array(Object.values(counts))];




// let count = [];
// products.forEach(function(i) { count[i] = (count[i]||0) + 1;});



lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);