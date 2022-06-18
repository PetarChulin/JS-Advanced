const ChristmasMovies = require('./02. Christmas Movies');
const { expect } = require('chai');

describe("Tests movies", function () {

    let instance = {};
    beforeEach(() => instance = new ChristmasMovies());


    describe('Tests', () => {
        it('tests for empty properties', () => {
            expect(() => (instance.movieCollection == '').to.throw(Error));
            expect(() => (instance.watched == '').to.throw(Error));
            expect(() => (instance.actors == '').to.throw(Error));
        });
    });

    describe('tests for movie presence', () => {
        it('buy movie', () => {
            instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);

            expect(() => instance.discardMovie('Home Alone')).to.throw('Home Alone is not watched');


        });
        it('movie', () => {
            expect(instance.buyMovie('Ted', ['some', 'ted', 'some']))
            .to.equal(`You just got Ted to your collection in which some, ted are taking part!`);
        });

    });
    describe('already in the list', () => {
        it('movie', () => {
            expect(instance.buyMovie('Ted', ['some']));
            expect(() => instance.buyMovie('Ted', ['some'])).to.throw(`You already own Ted in your collection!`);
        });
    })
    describe('discard movie', () => {
        it('movie', () => {
            expect(() => instance.discardMovie('Alien')).to.throw('Alien is not at your collection!');
        });
        it('no such movie in the collection', () => {
            expect(() => instance.watchMovie('movie')).to.throw('No such movie in your collection!');
        });       
        it('addition', () => {
            instance.buyMovie('Rambo', ['Silvester S']);
            instance.watched['Rambo'] = 1;
            expect(instance.discardMovie('Rambo')).to.equal(`You just threw away Rambo!`);
        });
    });
    describe('favouriteMovie', () => {
        it('movie', () => {
            instance.watched.one = 1;
            instance.watched.Rambo = 3;
            expect(instance.favouriteMovie()).to.equal('Your favourite movie is Rambo and you have watched it 3 times!');
        });
        it('empty watched list', () => {

            expect(() => instance.favouriteMovie()).to.throw(Error);
        });
    });
    describe('most starred actor', () => {
        it('empty watched list', () => {
            expect(() => instance.mostStarredActor()).to.throw(Error);
        });

        it('movie', () => {
            instance.buyMovie('Rambo', ['Silvester', 'some']);
            instance.buyMovie('Rambo 2', ['Silvester', 'one']);
            instance.buyMovie('Rambo 3', ['Silvester', 'another']);
            expect(instance.mostStarredActor()).to.equal('The most starred actor is Silvester and starred in 3 movies!');
        });
    });
});
