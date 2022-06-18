class ChristmasDinner {


    constructor(number) {
        this.budget = number;
        if (number < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    // set _budget(number) {
    //     if (number < 0) {
    //         throw new Error('The budget cannot be a negative number');
    //     }
    //     this.budget = number;
    // }

    shopping([product, price]) {

        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(product);
        this.budget -= price;
        return `You have successfully bought ${product}!`;


    }
    recipes({ recipeName, productsList }) {

        if (productsList.every(product => this.products.includes(product))) {
            this.dishes.push({ recipeName, productsList });

            return `${recipeName} has been successfully cooked!`
        } else {
            throw new Error('We do not have this product');
        }
    }
    inviteGuests(name, dish) {

        let searchedDish = this.dishes.find(d => d.recipeName == dish);

        if (!this.dishes.includes(searchedDish)) {
            throw new Error('We do not have this dish');
        }

        if (!this.guests[name]) {
            this.guests[name] = dish;
            return `You have successfully invited ${name}!`;
        } else {
            throw new Error('This guest has already been invited');
        }
    }

    showAttendance() {

        let result = [];

        Object.entries(this.guests).forEach(([key, value]) => {
            let prod = [];
            this.dishes.forEach((d) => {
                if (d.recipeName == value) {
                    prod = d.productsList;
                }
            })
            result.push(`${key} will eat ${value}, which consists of ${prod.join(', ')}`);
        });
        return result.join('\n');
    }
}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

console.log(dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
}));
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});
console.log(dinner.showAttendance());



