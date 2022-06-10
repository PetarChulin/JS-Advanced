const { expect } = require('chai');
const library = require('./library');

describe('Unit Testing', () => {
    describe('Test calculate price of a book', () => {
        it('test for invalid input', () => {
            expect(() => library.calcPriceOfBook(1, 'string')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('string', 'string')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('string', 1.5)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('string', undefined)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(undefined, 1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(1, 2.5)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(2.5 , 1)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(1, 2)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([], 'string')).to.throw('Invalid input');
        });
        it('test price depending on the year of publication', () => {
            expect(library.calcPriceOfBook('Book', 1980)).to.equal(`Price of Book is 10.00`);
            expect(library.calcPriceOfBook('Book', 1960)).to.equal(`Price of Book is 10.00`);
            expect(library.calcPriceOfBook('Book', 2000)).to.equal(`Price of Book is 20.00`);
        });
    });
    describe('Test finding a book', () => {
        it('test for count of books', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Torronto")).to.equal('We found the book you want.');            
            expect(library.findBook(["Troy", "Life Style", "Torronto"], "Book")).to.equal('The book you are looking for is not here!');
            expect(() => library.findBook([], 'string')).to.throw('No books currently available');
        });
    });
    describe('Test for arangement of the books', () => {
        it('Test for invalid input', () => {
            expect(() => library.arrangeTheBooks(2.5)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-2)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-2.8)).to.throw('Invalid input');
        });
        it('Test  books are arranged on the shelves', () => {
            expect(library.arrangeTheBooks(38)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(42)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});