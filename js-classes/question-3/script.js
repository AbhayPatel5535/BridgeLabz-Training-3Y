// Q3: Library Management System (Classes + Objects)
class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) return false;
    this.isIssued = true;
    return true;
  }

  returnBook() {
    if (!this.isIssued) return false;
    this.isIssued = false;
    return true;
  }
}

const books = [
  new Book("The Alchemist", "Paulo Coelho", "9780061122415"),
  new Book("Atomic Habits", "James Clear", "9780735211292"),
  new Book("1984", "George Orwell", "9780451524935", true),
  new Book("The Hobbit", "J. R. R. Tolkien", "9780547928227")
];

const availableBooksList = document.getElementById("availableBooks");
const message = document.getElementById("message");

function displayAvailableBooks() {
  availableBooksList.innerHTML = "";
  const availableBooks = books.filter(book => !book.isIssued);

  if (availableBooks.length === 0) {
    availableBooksList.innerHTML = "<li>No books are currently available.</li>";
    return;
  }

  availableBooks.forEach(book => {
    const item = document.createElement("li");
    item.textContent = `${book.title} by ${book.author} (ISBN: ${book.ISBN})`;
    availableBooksList.appendChild(item);
  });
}

document.getElementById("showBooksButton").addEventListener("click", displayAvailableBooks);

document.getElementById("issueForm").addEventListener("submit", event => {
  event.preventDefault();
  const enteredISBN = document.getElementById("isbn").value.trim();
  const book = books.find(item => item.ISBN === enteredISBN);

  if (!book) {
    message.textContent = "No book found with that ISBN.";
    message.style.color = "red";
  } else if (!book.issueBook()) {
    message.textContent = `"${book.title}" is already issued.`;
    message.style.color = "red";
  } else {
    message.textContent = `Successfully issued "${book.title}".`;
    message.style.color = "green";
  }

  displayAvailableBooks();
  event.target.reset();
});

displayAvailableBooks();
