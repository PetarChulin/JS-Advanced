const { expect, assert } = require('chai');
const bookSelection = require('./bookSelection.js');

describe('Book Selection tests', () => {

  it('test for adultness', () => {
    expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
    expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal(`Books with Thriller genre are not suitable for kids at 10 age`);
    expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
    expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal(`Books with Horror genre are not suitable for kids at 10 age`);
    expect(bookSelection.isGenreSuitable('Thriller', 14)).to.equal(`Those books are suitable`);
    expect(bookSelection.isGenreSuitable('Horror', 15)).to.equal(`Those books are suitable`);
  });

  it('test isItAffordable', () => {
    expect(() => bookSelection.isItAffordable('string', 1).to.throw('Invalid input'));
    expect(() => bookSelection.isItAffordable('string', 'string').to.throw('Invalid input'));
    expect(() => bookSelection.isItAffordable(1, 'string').to.throw('Invalid input'));
    expect(() => bookSelection.isItAffordable(1, NaN).to.throw('Invalid input'));
    expect(() => bookSelection.isItAffordable(1, NaN).to.throw('Invalid input'));
    expect(() => bookSelection.isItAffordable(undefined, []).to.throw('Invalid input'));
    expect(() => bookSelection.isItAffordable(undefined, {}).to.throw('Invalid input'));
    expect(bookSelection.isItAffordable(20, 10)).to.equal(`You don't have enough money`);
    expect(bookSelection.isItAffordable(10, 20)).to.equal(`Book bought. You have 10$ left`);
  });

  it('test suitableTitles', () => {
    expect(() => bookSelection.suitableTitles('string', 'string').to.throw('Invalid input'));
    expect(() => bookSelection.suitableTitles(['string', 'a', 'b'], 'string').to.throw('Invalid input'));
    expect(() => bookSelection.suitableTitles(1, 'string').to.throw('Invalid input'));
    expect(() => bookSelection.suitableTitles(1, 1).to.throw('Invalid input'));
    expect(bookSelection.suitableTitles([{ title: 'book1', genre: 'Horror' },
    { title: 'book2', genre: 'Horror' },], 'Horror')).to.deep.equal(['book1', 'book2']);
  });
});
