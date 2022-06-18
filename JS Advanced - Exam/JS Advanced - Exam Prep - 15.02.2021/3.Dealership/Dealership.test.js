const { expect } = require('chai');
const dealership = require('./Dealership');

describe("Tests dealership", function () {
    describe('tests prices', () => {
        it('tests price for the car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
            expect(dealership.newCarCost('Audi A6 4K', 21000)).to.equal(1000);
        });
      });
    describe('tests prices', () => {
        it('tests extras array', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', ' navigation'], [0, 1])).to.deep.equal(['heated seats', 'sliding roof']);

        });
    });
    describe('tests euro category', () => {
        it('tests extras array', () => {
            dealership.newCarCost('Audi A4 B8', 30000);
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);

        });
    });
});
