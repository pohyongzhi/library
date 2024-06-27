const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function listLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = myLibrary[i].title;
        const author = myLibrary[i].author;
        const pages = myLibrary[i].pages;
        const readStatus = myLibrary[i].status;

        // Add the title, author, pages, and readStatus to the card
        const cardTitle = document.createElement("h2");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = title;

        const cardAuthorName = document.createElement("span");
        cardAuthorName.classList.add("card-author-name");
        cardAuthorName.textContent = author;

        const cardPages = document.createElement("span");
        cardPages.classList.add("card-pages");
        cardPages.textContent = pages;

        const cardStatus = document.createElement("span");
        cardStatus.classList.add("card-status");

        if (readStatus === false) {
            cardStatus.textContent = "Status: Reading";
        } else {
            cardStatus.textContent = "Status: Read";
        }

        card.appendChild(cardTitle);
        card.appendChild(cardAuthorName);
        card.appendChild(cardPages);
        card.appendChild(cardStatus);

        // Create the button-group and buttons
        const buttonGroup = document.createElement("div");
        buttonGroup.classList.add("button-group");

        const cardReadBtn = document.createElement("button");
        cardReadBtn.classList.add("card-read-btn", "btn");
        cardReadBtn.innerHTML = "Read";

        const cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.classList.add("card-delete-btn", "btn");
        cardDeleteBtn.innerHTML = "Delete";

        buttonGroup.appendChild(cardReadBtn);
        buttonGroup.appendChild(cardDeleteBtn);

        card.appendChild(buttonGroup);

        const cardGroup = document.querySelector(".card-group");
        cardGroup.appendChild(card);
    }
}

const book1 = new Book("Book1", "John", 234, false);
const book2 = new Book("Book2", "harry", 235757, false);
const book3 = new Book("Book3", "some", 2345, true);
const book4 = new Book("book4", "john", 5234, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book3);
addBookToLibrary(book3);
addBookToLibrary(book3);
addBookToLibrary(book3);
addBookToLibrary(book3);
addBookToLibrary(book3);

listLibrary();
