import './books.js';

window.addEventListener('load', () => {
  createBookList();
});

async function createBookList() {
  const response = await fetch('./books.json');
  const json = await response.json();

  const booksDiv = document.getElementById('books');

  json.books.forEach((book) => {
    const element = document.createElement('mit-book');
    console.log(element);
    element.bookData = book;
    booksDiv.appendChild(element);
  });

}