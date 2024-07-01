const myLibrary = [];

// Functions
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.toggleReadStatus = function () {
    this.status = !this.status;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function listLibrary() {
    const cardGroup = document.querySelector(".card-group");
    cardGroup.innerHTML = "";

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
        cardAuthorName.textContent = "Author: " + author;

        const cardPages = document.createElement("span");
        cardPages.classList.add("card-pages");
        cardPages.textContent = "Pages: " + pages;

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

        cardReadBtn.addEventListener("click", function () {
            myLibrary[i].toggleReadStatus();

            listLibrary();
        });

        const cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.classList.add("card-delete-btn", "btn");
        cardDeleteBtn.innerHTML = "Delete";

        cardDeleteBtn.addEventListener("click", function () {
            myLibrary.splice(i, 1);

            listLibrary();
        });

        buttonGroup.appendChild(cardReadBtn);
        buttonGroup.appendChild(cardDeleteBtn);

        card.appendChild(buttonGroup);

        cardGroup.appendChild(card);
    }
}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("reading").checked = false;
    document.getElementById("read").checked = false;
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    // Event Listeners
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            button.style.backgroundColor = "lightgray";

            setTimeout(function () {
                button.style.backgroundColor = "antiquewhite";
            }, 100);
        });
    });
});

const addBookBtn = document.querySelector("#add-book-btn");
const closeBtn = document.querySelector("#close-btn");
const form = document.querySelector("form");
const submitBtn = document.querySelector("#submit-btn");
const overlay = document.getElementById("overlay");

addBookBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";

    clearForm();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Take all of the form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const reading = document.getElementById("reading").value;

    // Validate status
    if (reading) {
        addBookToLibrary(new Book(title, author, pages, false));
    } else {
        addBookToLibrary(new Book(title, author, pages, true));
    }

    // Reset the display
    listLibrary();

    // Clear form
    clearForm();
});

// Populate the library with books
const book1 = new Book("Book1", "John", 234, false);
const book2 = new Book("Book2", "harry", 235757, false);
const book3 = new Book("Book3", "some", 2345, true);
const book4 = new Book("book4", "john", 5234, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

listLibrary();

// Hide div
overlay.style.display = "none";
