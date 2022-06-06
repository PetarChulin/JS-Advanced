class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error(`Not enough space in the collection.`);
        }
        this.books.push({ bookName, bookAuthor, payed: false });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    payBook(bookName) {
        let book = this.books.find(b => b.bookName == bookName);

        if (!book) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (book.payed == true) {
            throw new Error(`${bookName} has already been paid."`)
        } else {
            book.payed = true;
            return `${bookName} has been successfully paid.`
        }
    }
    removeBook(bookName) {
        let book = this.books.find(b => b.bookName == bookName);

        if (!book) {
            throw new Error(`The book, you're looking for, is not found.`);
        }
        if (book.payed == false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`)
        }
        let removed = this.books.indexOf(book);
        this.books.splice(removed, 1);
        return (`${bookName} remove from the collection.`)

    }
    getStatistics(bookAuthor) {

        let statistics = [];
        let sortedBooks = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
       
        if (!bookAuthor) {
            statistics.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
            sortedBooks.map((b) => {
                let paid = b.payed ? 'Has Paid' : 'Not Paid';
                statistics.push(`${b.bookName} == ${b.bookAuthor} - ${paid}.`)
            });
        } else {
            let found = this.books.find(b => b.bookAuthor == bookAuthor);

            if (found) {
                let paid = found.payed ? 'Has Paid' : 'Not Paid';
                statistics.push(`${found.bookName} == ${found.bookAuthor} - ${paid}.`);
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`)
            }
        }
        return statistics.join('\n');
    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());



