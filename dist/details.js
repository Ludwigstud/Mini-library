export function displayBookDetails(book) {
    const detailsDiv = document.querySelector(".details");
    detailsDiv.style.visibility = "visible";
    detailsDiv.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Publisher:</strong> ${book.publisher}</p>
        <p><strong>Year:</strong> ${book.year}</p>
        <p><strong>Pages:</strong> ${book.pages || "N/A"}</p>
        <p><strong>Plot:</strong> ${book.plot}</p>
        <p><strong>Audience:</strong> ${book.audience}</p>
    `;
}
