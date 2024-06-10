const myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary();
}


function displayLibrary() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const titleElement = document.createElement('h2');
    titleElement.textContent = book.title;
    card.appendChild(titleElement);

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${book.author}`;
    card.appendChild(authorElement);

    const pagesElement = document.createElement('p');
    pagesElement.textContent = `Pages: ${book.pages}`;
    card.appendChild(pagesElement);

    const readElement = document.createElement('p');
    readElement.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
    card.appendChild(readElement);

    libraryDiv.appendChild(card);
  });
}


addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, true);
addBookToLibrary('1984', 'George Orwell', 328, false);
addBookToLibrary('Moby Dick', 'Herman Melville', 635, true);
