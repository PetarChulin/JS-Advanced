const { expect } = require('chai');
const flowerShop = require('./flowerShop.js');

describe('Flower Shop tests', () => {

    describe('Tests calcPriceOfFlowers', () => {
        it('Test for invalid input', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 1, 1).to.throw('Invalid input!'));
            expect(() => flowerShop.calcPriceOfFlowers('string', 'string', 1).to.throw('Invalid input!'));
            expect(() => flowerShop.calcPriceOfFlowers('string', 1, 'string').to.throw('Invalid input!'));
            expect(() => flowerShop.calcPriceOfFlowers('string', 'string', 'string').to.throw('Invalid input!'));
        });

        it('Check valid parameters', () => {
            expect(flowerShop.calcPriceOfFlowers('string', 3, 3)).to.equal(`You need $9.00 to buy string!`);
            expect(flowerShop.calcPriceOfFlowers('string', 4, 3)).to.equal(`You need $12.00 to buy string!`);
            expect(flowerShop.calcPriceOfFlowers('string', 0, 3)).to.equal(`You need $0.00 to buy string!`);

        });
    });
    describe('Tests checkFlowersAvailable' , () => {
        it('Test for present' , () => {
            expect(flowerShop.checkFlowersAvailable('Rose' , ['Rose', 'Orch', 'Lily'])).to.equal(`The Rose are available!`);
            expect(flowerShop.checkFlowersAvailable('Rose' , ['Orch', 'Lily'])).to.equal(`The Rose are sold! You need to purchase more!`);
        });
    });
    describe('Tests sellFlowers' , () => {
        it('Test removing an element' , () => {
            expect(flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'] , 2)).to.equal('Rose / Orch');
            expect(() => flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'] , 4).to.throw('Invalid input!'));
            expect(() => flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'] , -1).to.throw('Invalid input!'));
            expect(() => flowerShop.sellFlowers(['Rose', 'Orch', 'Lily'] , 'string').to.throw('Invalid input!'));
        });
    });
});