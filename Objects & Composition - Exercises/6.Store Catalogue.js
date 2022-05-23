function catalogue(array) {

    let list = {};
   
    for (const products of array) {

        let line = products.split(' : ')
        let product = line[0];
        let price = Number(line[1]);

        list[product] = price;
    }

    let sorted = Object.keys(list).sort().reduce((accumulator, key) => {
        accumulator[key] = list[key];
        return accumulator;
    }, {});

    let result = Object.keys(sorted);
    let symbol = [];

    for (const e of result) {
        let letter = e.charAt(0);
        symbol.push(letter);
    }
    let letters = [...new Set(symbol)];

    for (const e of letters) {

        console.log(e);
        for (const p in sorted) {
            if (p.charAt(0) == e) {
                console.log(`  ${p}: ${list[p]}`);
            }
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