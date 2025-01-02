import { getData } from "./fetch.js";
import { initializeBooks, setupSearch } from "./render.js";

async function initialize() {
	const books = await getData(); 
	initializeBooks(books); 
	setupSearch(); 
}

initialize();
