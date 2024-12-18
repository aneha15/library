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
};

const displayBooks = document.querySelector('.displayBooks');
const form = document.querySelector('form');
const dialog = document.querySelector('dialog');
const addButton = document.querySelector('.add');
const submitButton = document.querySelector('#submit');

function displaybooks(title, author, pages, status) {
    addBookToLibrary(title, author, pages, status);

    const display = document.createElement('div');
    const removeButton = document.createElement('div');
    display.style.cssText = "display: flex; align-items: center; justify-content: space-between; gap: 10px;";
    removeButton.style.cssText = "padding: 10px; width: 60px; background-color: palegreen; font-size: 16px;";
    removeButton.textContent = "Remove";

    const lastAdded = myLibrary.at(-1);

    display.innerHTML = lastAdded.info;
    display.setAttribute('data' , myLibrary.length -1);
    removeButton.setAttribute('data' , myLibrary.length -1);
    displayBooks.appendChild(display);
    display.appendChild(removeButton);

    removeButton.onclick = () => {
        myLibrary.splice(removeButton.getAttribute('data'), 1);
        removeButton.parentElement.remove();
        console.table(myLibrary);
    };
};

displaybooks('The Apothecary Diaries', 'Natsu Hyuga', '228', 'currently reading');
displaybooks('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet');

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




