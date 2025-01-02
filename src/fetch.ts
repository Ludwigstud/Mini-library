import { Book } from "./Interfaces.js";

export async function getData(): Promise<Book[]> {
	try {
		const response = await fetch(
			"https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books"
		);
		if (!response.ok) {
			throw new Error(`Failed to fetch books: ${response.statusText}`);
		}
		const data: Book[] = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching books:", error);
		return [];
	}
}
