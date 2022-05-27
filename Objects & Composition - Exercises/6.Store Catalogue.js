function solve(input) {

    let products = {};
    let sortedProd = input.sort((a, b) => a.localeCompare(b));
       for (const e of sortedProd) {
        let [product, price] = e.split(' : ');
        let letter = product[0];

        !products.hasOwnProperty(letter) ? products[letter] = {} : null;

        products[letter][product] = price;
    }
    for (const letter in products) {
        console.log(letter);
        for (const p in products[letter]) {
            console.log(`  ${p}: ${products[letter][p]}`);
        }
    }
}
catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);
