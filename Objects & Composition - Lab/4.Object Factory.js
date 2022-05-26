function factory(lib, ord) {

    let result = [];

    for (const order of ord) {
        let object = {};
        for (const key in order.template) {
            object[key] = order.template[key];

        }
        for (const part of order.parts) {
            object[part] = lib[part];
        }
        result.push(object);
    }
    return result;
    
    //variant 2
    // return ord.map(order => Object.assign({}, order.template, Object.fromEntries(order.parts.map(part => [part, lib[part]]))));
}

const library = {


    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const products = factory(library, orders);

console.log(products);

