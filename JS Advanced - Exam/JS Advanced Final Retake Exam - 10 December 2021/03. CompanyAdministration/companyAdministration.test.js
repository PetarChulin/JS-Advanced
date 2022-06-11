const companyAdministration = require('./companyAdministration');
const { expect } = require('chai');

describe('Tests companyAdministration', () => {
    describe('Test for corectness', () => {
        it('Test for incorrect position', () => {
            expect(() => companyAdministration.hiringEmployee('someone', 'Stamat', 3)).to.throw('We are not looking for workers for this position.');
        });
        it('Test for incorrect position', () => {
            expect(() => companyAdministration.hiringEmployee('Joro', 'junior', 10)).to.throw('We are not looking for workers for this position.');
        });
        it('Test for 3 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 3)).to.equal(`Peter was successfully hired for the position Programmer.`)
        });
        it('Test for more than 3 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Peter', 'Programmer', 5)).to.equal(`Peter was successfully hired for the position Programmer.`)
        });
        it('Test for 2 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Joro', 'Programmer', 2)).to.equal(`Joro is not approved for this position.`)
        });
        it('Test for 0 years of experience', () => {
            expect(companyAdministration.hiringEmployee('Joro', 'Programmer', 0)).to.equal(`Joro is not approved for this position.`)
        });

        it('Test for hours is number', () => {
            expect(() => companyAdministration.calculateSalary('string')).to.throw(`Invalid hours`)
        });
        it('Test for negative number value', () => {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw(`Invalid hours`)
        });
        it('Test for calculate salary', () => {
            expect(companyAdministration.calculateSalary(100)).to.equal(1500)
        });
        it('Test calculate bonus', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415)
        });

        it('Test for removing employee', () => {
            expect(companyAdministration.firedEmployee(['Peter', 'Joro', 'Kalin'], 1)).to.equal('Peter, Kalin')
        });
        it('Test for invalid type of index for remove', () => {
            expect(() => companyAdministration.firedEmployee(['Peter', 'Joro', 'Kalin'], 'string')).to.throw(`Invalid input`)
        });

        it('Test for string type of employee array ', () => {
            expect(() => companyAdministration.firedEmployee('string', 1)).to.throw(`Invalid input`)
        });
        it('Test for number type of employee array ', () => {
            expect(() => companyAdministration.firedEmployee(1, 1)).to.throw(`Invalid input`)
        });
        it('Test for negative index for remove', () => {
            expect(() => companyAdministration.firedEmployee(['Peter', 'Joro', 'Kalin'], -3)).to.throw(`Invalid input`)
        });
        it('Test for  index bigger than array length', () => {
            expect(() => companyAdministration.firedEmployee(['Peter', 'Joro', 'Kalin'], 5)).to.throw(`Invalid input`)
        });
    });


});
