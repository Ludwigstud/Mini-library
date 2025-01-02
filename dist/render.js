import { displayBookDetails } from "./details.js";
let books = [];
export function initializeBooks(bookData) {
    books = bookData;
    renderBooks();
}
export function renderBooks(filter = "") {
    const container = document.querySelector(".container");
    container.innerHTML = "";
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(filter.toLowerCase()));
    filteredBooks.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.style.backgroundColor = book.color;
        bookDiv.innerText = book.title;
        bookDiv.addEventListener("click", () => {
            displayBookDetails(book);
        });
        container.appendChild(bookDiv);
    });
}
export function setupSearch() {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
        const query = searchInput.value;
        renderBooks(query);
    });
}
