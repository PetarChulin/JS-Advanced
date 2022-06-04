class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let types = [];
        for (const v of vegetables) {
            let [type, quantity, price] = v.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let found = this.availableProducts.find(v => v.type == type);

            if (found) {
                found.quantity += quantity;
                found.price < price ? found.price = price : null;
            } else {
                let products = { type, quantity, price }
                this.availableProducts.push(products);
                types.push(type);
            }
        }
        return `Successfully added ${types.join(', ')}`;
    }
    buyingVegetables(selectedProducts) {

        let totalPrice = 0.00;

        for (const e of selectedProducts) {

            let [type, quantity] = e.split(' ');

            let found = this.availableProducts.find(v => v.type == type);
            if (!found) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {

                if (quantity > found.quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                }
            }
            let sum = found.price * quantity;
            totalPrice += sum;
            found.quantity -= quantity;

        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity) {

        let found = this.availableProducts.find(v => v.type == type);

        if (!found) {
            throw new Error(`${type} is not available in the store.`);
        } else if (quantity > found.quantity) {
            found.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`

        } else {
            found.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }
    revision() {

        let result = [];
        let sorted = this.availableProducts.sort((a, b) => a.price - b.price);

        result.push("Available vegetables:");
        sorted.forEach(av => result.push(`${av.type}-${av.quantity}-$${av.price}`));
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }
}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());





