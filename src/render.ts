import { Book } from "./Interfaces.js";
import { displayBookDetails } from "./details.js";

let books: Book[] = [];

export function initializeBooks(bookData: Book[]) {
	books = bookData;
	renderBooks();
}

export function renderBooks(filter: string = "") {
	const container = document.querySelector(".container") as HTMLElement;
	container.innerHTML = "";

	const filteredBooks = books.filter((book) =>
		book.title.toLowerCase().includes(filter.toLowerCase())
	);

	filteredBooks.forEach((book: Book) => {
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
	const searchInput = document.getElementById("search") as HTMLInputElement;

	searchInput.addEventListener("input", () => {
		const query = searchInput.value;
		renderBooks(query);
	});
}

