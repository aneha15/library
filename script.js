const myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  get toggleStatus() {
    this.status = this.status === "Read" ? "Not Read" : "Read";
  }
}

function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

const displayBooks = document.querySelector(".displayBooks");
const form = document.querySelector("form");
const dialog = document.querySelector("dialog");
const addButton = document.querySelector(".add");
const submitButton = document.querySelector("#submit");
const cancelButton = document.querySelector("#cancel");

function displaybooks(title, author, pages, status) {
  addBookToLibrary(title, author, pages, status);

  const display = document.createElement("div");
  const bktitle = document.createElement("div");
  const bkauthor = document.createElement("div");
  const bkpages = document.createElement("div");
  const bkstatus = document.createElement("button");
  const removeButton = document.createElement("button");

  display.style.cssText =
    "display: flex; flex-direction: column; gap: 10px; padding: 30px; justify-content: space-between; align-items: center;";
  bkstatus.style.cssText =
    "padding: 10px; width: 120px; background-color: pink; border:none; font-size: 16px; border-radius: 5px;";
  removeButton.style.cssText =
    "padding: 10px; width: 120px; background-color: palegreen; font-size: 16px; border: none; border-radius: 5px;";

  const lastAdded = myLibrary.at(-1);

  bktitle.textContent = `${lastAdded.title}`;
  bkauthor.textContent = `${lastAdded.author}`;
  bkpages.textContent = `${lastAdded.pages} pages`;
  bkstatus.textContent = `${lastAdded.status}`;
  removeButton.textContent = "Remove";

  display.setAttribute("data", myLibrary.length - 1);
  removeButton.setAttribute("data", myLibrary.length - 1);
  bkstatus.setAttribute("data", myLibrary.length - 1);

  display.appendChild(bktitle);
  display.appendChild(bkauthor);
  display.appendChild(bkpages);
  display.appendChild(bkstatus);
  display.appendChild(removeButton);

  displayBooks.appendChild(display);

  removeButton.onclick = () => {
    myLibrary.splice(removeButton.getAttribute("data"), 1);
    removeButton.parentElement.remove();
  };

  bkstatus.onclick = () => {
    const index = bkstatus.getAttribute("data");
    myLibrary[index].toggleStatus;
    bkstatus.textContent = `${myLibrary[index].status}`;
  };
}

addButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", () => {
  form.reset();
  dialog.close();
});


form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const status = document.querySelector('input[name="bookstatus"]:checked');

  if (form.checkValidity()) {
    displaybooks(title.value, author.value, pages.value, status.value);
    form.reset();
    dialog.close();
  } 
});

displaybooks("The Apothecary Diaries Vol 7", "Natsu Hyuuga", "228", "Read");
displaybooks("Anxious People", "Fredrik Backman", "343", "Not Read");
displaybooks(
  "Before The Coffee Gets Cold",
  "Toshikazu Kawaguchi",
  "272",
  "Read"
);
displaybooks(
  "Tomorrow, and Tomorrow, and Tomorrow",
  "Gabrielle Zevin",
  "416",
  "Read"
);
