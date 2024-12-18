const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${status}`;
    }
};

function addBookToLibrary() {
    const book = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
    myLibrary.push(book);
};

addBookToLibrary();