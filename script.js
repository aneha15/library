const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = `${title} by ${author}, ${pages} pages, ${status}`;
    // this.info = function() {
    //     `${title} by ${author}, ${pages} pages, ${status}`;
    // }
};

function addBookToLibrary() {
    const book = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
    const book2 = new Book('The Apothecary Diaries', 'Natsu Hyuga', '228', 'currently reading');
    myLibrary.push(book);
    myLibrary.push(book2);
};

const displayBooks = document.querySelector('.displayBooks');


const logBooks = (element) => {
   const display = document.createElement('div');
   display.innerHTML = element.info;
//    console.log(display.innerHTML);
   displayBooks.appendChild(display);
};

function displaybooks() {
    addBookToLibrary();
    myLibrary.forEach(logBooks);
};

displaybooks();

