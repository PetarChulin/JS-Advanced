function solve(array) {

    let juices = {};
    
    let bottles = {};
    array.forEach(e => {
        let [flavour, qty] = e.split(' => ');
        qty = Number(qty);
        !juices[flavour] ? juices[flavour] = qty : juices[flavour] += qty;

        if (juices[flavour] >= 1000) {
            !bottles[flavour] ? bottles[flavour] = 0 : null;
            bottles[flavour] += Math.floor(juices[flavour] / 1000);
            juices[flavour] -= (Math.floor(juices[flavour] / 1000) * 1000);
        }
    });
    for (let flavour in bottles) {

        console.log(flavour + ' => ' + bottles[flavour]);
    }
}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);