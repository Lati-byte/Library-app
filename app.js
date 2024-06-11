const myLibrary = [];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Method to toggle the read status of a book
Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
  };

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary();
}

// Function to remove a book from the library
function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
  }

  // Function to toggle the read status of a book
function toggleReadStatus(index) {
    myLibrary[index].toggleReadStatus();
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

     //  remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button'); // Add class for styling
    removeButton.setAttribute('data-index', index);
    removeButton.onclick = function() {
      removeBookFromLibrary(index);
    };
    card.appendChild(removeButton);

     // toggle read status button
     const toggleReadButton = document.createElement('button');
     toggleReadButton.textContent = 'Change Read Status';
     toggleReadButton.classList.add('toggle-read-button'); // Add class for styling
     toggleReadButton.setAttribute('data-index', index);
     toggleReadButton.onclick = function() {
       toggleReadStatus(index);
     };
     card.appendChild(toggleReadButton);

    libraryDiv.appendChild(card);
  });
}

// Modal handling
const modal = document.getElementById("newBookModal");
const btn = document.getElementById("newBookBtn");
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Handle form submission
document.getElementById("newBookForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const read = document.getElementById("read").value === "true";
  
    addBookToLibrary(title, author, pages, read);
  
    // Close the modal
    modal.style.display = "none";
  
    // Clear the form
    document.getElementById("newBookForm").reset();
  });
  
  

  addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, true);
  addBookToLibrary('1984', 'George Orwell', 328, false);
  addBookToLibrary('Moby Dick', 'Herman Melville', 635, true);
  addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
  addBookToLibrary('Pride and Prejudice', 'Jane Austen', 279, false);
  addBookToLibrary('War and Peace', 'Leo Tolstoy', 1225, true);
  addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 214, false);
  addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
