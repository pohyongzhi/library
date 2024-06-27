const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return title + " by " + author + ", " + pages + " pages";
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function listLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        container.append(myLibrary[i].title);
        container.append(" ");
    }
}

const book1 = new Book("Book1", "John", 234, false);
const book2 = new Book("Book2", "harry", 235757, false);
const book3 = new Book("Book3", "some", 2345, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

const container = document.querySelector(".container");
