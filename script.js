const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = `${title} by ${author}, ${pages} pages, ${status}`;
};

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
    // const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');
    // const book2 = new Book('The Apothecary Diaries', 'Natsu Hyuga', '228', 'currently reading');
    // myLibrary.push(book1);
    // myLibrary.push(book2);
};

const displayBooks = document.querySelector('.displayBooks');
const form = document.querySelector('form');
const dialog = document.querySelector('dialog');
const addButton = document.querySelector('.add');
const submitButton = document.querySelector('#submit');

// const logBooks = (element) => {
//     const display = document.createElement('div');
//     display.innerHTML = element.info;
//     displayBooks.appendChild(display);
// };



function displaybooks(title, author, pages, status) {
    addBookToLibrary(title, author, pages, status);
    const display = document.createElement('div');
    const lastAdded = myLibrary.pop();
    display.innerHTML = lastAdded.info;
    displayBooks.appendChild(display);
    // myLibrary.forEach(logBooks);
};

addButton.addEventListener('click', () => {
    dialog.showModal();
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const status = document.querySelector('input[name="bookstatus"]:checked').value;

    // console.log(`${title}, ${author}, ${pages}, ${status}`);

    if (title && author && pages) {
        form.reset();
        dialog.close();
        displaybooks(title, author, pages, status);
    }
    
});




