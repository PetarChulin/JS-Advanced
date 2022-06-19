const cinema = require('./cinema');
const { expect } = require('chai');

describe("Tests cinema", () => {
    describe("test show movies", () => {
        it("test for movie presence", () => {
            expect(cinema.showMovies([])).to.equal(`There are currently no movies to show.`);
            expect(cinema.showMovies(['movie1', 'movie2', 'movie3'])).to.equal('movie1, movie2, movie3');
        });
    });
    describe("test for ticket price", () => {
        it("test whether the submitted projectionType is present", () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });
        it('test for invalid input', () => {
            expect(() => cinema.ticketPrice('Invalid')).to.throw('Invalid projection type.');
        });
    });
    describe('Test for swap seats in the hall', () => {
        it('test for invalid input', () => {
            expect(cinema.swapSeatsInHall(-1, 15)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-10, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(25, 25)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(25, -10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(25, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10, 25)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, -1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.5, 15)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2.5, 5.5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('string', 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10, 'string')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('string', 'string')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(10, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 10)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it('test for swaps the seat number', () => {
            expect(cinema.swapSeatsInHall(2, 18)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(9, 10)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');

        });
    });

});
