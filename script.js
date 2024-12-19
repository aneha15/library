const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    // this.info = `${title} by ${author}, ${pages} pages, ${status}`;
};

Book.prototype.toggleStatus = function () {
    this.status === 'Read' ? this.status = 'Not Read' : this.status = 'Read';
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
    // const buttons = document.createElement('div')
    const removeButton = document.createElement('div');
    // const changeStatus = document.createElement('div');

    display.style.cssText = "display: flex; flex-direction: column; gap: 10px; padding: 26px; justify-content: space-between; align-items: center;";
    removeButton.style.cssText = "padding: 10px; width: 60px; background-color: palegreen; font-size: 16px;";
    removeButton.textContent = "Remove";
    // changeStatus.style.cssText = "padding: 10px; width: 90px; background-color: pink; font-size: 16px;";
    // changeStatus.textContent = "Toggle Read Status";
    // buttons.style.cssText = "display: flex; gap: 10px; align-items: center;";
    const lastAdded = myLibrary.at(-1);
   

    const bktitle = document.createElement('div');
    const bkauthor = document.createElement('div');
    const bkpages = document.createElement('div');
    const bkstatus = document.createElement('button');
    bkstatus.style.cssText = 'padding: 10px; width: 90px; background-color: pink; border:none; font-size: 16px;';

    bktitle.textContent = `${lastAdded.title}`;
    bkauthor.textContent = `${lastAdded.author}`;
    bkpages.textContent = `${lastAdded.pages} pages`;
    bkstatus.textContent = `${lastAdded.status}`;

    bkstatus.setAttribute('data', myLibrary.length - 1);

    display.appendChild(bktitle);
    display.appendChild(bkauthor);
    display.appendChild(bkpages);
    display.appendChild(bkstatus);

    displayBooks.appendChild(display);

    // display.innerHTML = `<div>${lastAdded.title}</div>
    //                     <div>${lastAdded.author}</div>
    //                     <div>${lastAdded.pages} pages</div>
    //                     <button style='padding: 10px; width: 90px; background-color: pink; border:none; font-size: 16px;'>${lastAdded.status}</button>
    //                     `;


    display.setAttribute('data', myLibrary.length - 1);
    removeButton.setAttribute('data', myLibrary.length - 1);
    // changeStatus.setAttribute('data', myLibrary.length - 1);

    // display.appendChild(buttons);
    display.appendChild(removeButton);
    // displayBooks.appendChild(changeStatus);

    removeButton.onclick = () => {
        myLibrary.splice(removeButton.getAttribute('data'), 1);
        removeButton.parentElement.remove();
    };

    bkstatus.onclick = () => {
        const index = bkstatus.getAttribute('data');
        myLibrary[index].toggleStatus();
        bkstatus.textContent = `${myLibrary[index].status}`;
    };

    // changeStatus.onclick = () => {
    //     myLibrary[changeStatus.getAttribute('data')].toggleStatus();
    //     // console.table(myLibrary);
    // };
};

displaybooks('The Apothecary Diaries', 'Natsu Hyuga', '228', 'Read');
displaybooks('The Hobbit', 'J.R.R. Tolkien', '295', 'Not Read');

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




