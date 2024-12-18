const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = `${title} by ${author}, ${pages} pages, ${status}`;
};

Book.prototype.toggleStatus = function() {
    this.status === 'Read' ? this.status = 'Not Read Yet' : this.status = 'Read';
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
    const buttons = document.createElement('div')
    const removeButton = document.createElement('div');
    const changeStatus = document.createElement('div');

    display.style.cssText = "display: flex; justify-content: space-between; align-items: center;";
    removeButton.style.cssText = "padding: 10px; width: 60px; background-color: palegreen; font-size: 16px;";
    removeButton.textContent = "Remove";
    changeStatus.style.cssText = "padding: 10px; width: 90px; background-color: pink; font-size: 16px;";
    changeStatus.textContent = "Change Status";
    buttons.style.cssText = "display: flex; gap: 10px; align-items: center;";
    const lastAdded = myLibrary.at(-1);

    display.innerHTML = lastAdded.info;
    display.setAttribute('data', myLibrary.length - 1);
    removeButton.setAttribute('data', myLibrary.length - 1);
    changeStatus.setAttribute('data', myLibrary.length - 1);
    displayBooks.appendChild(display);
    display.appendChild(buttons);
    buttons.appendChild(removeButton);
    buttons.appendChild(changeStatus);

    removeButton.onclick = () => {
        myLibrary.splice(removeButton.getAttribute('data'), 1);
        removeButton.parentElement.parentElement.remove();
    };

    changeStatus.onclick = () => {
        myLibrary[changeStatus.getAttribute('data')].toggleStatus();
        console.table(myLibrary);
    };
};

displaybooks('The Apothecary Diaries', 'Natsu Hyuga', '228', 'Read');
displaybooks('The Hobbit', 'J.R.R. Tolkien', '295', 'Not read yet');

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




