// Task 1: Create a Book Class

class Book {
constructor (title, author, ISBN) {
    this.title = title
    this.author = author
    this.ISBN = ISBN
    this._isAvailable = true // default state is true here 
}
// getter
get isAvailable () {
    return this._isAvailable
}
// setter
set isAvailable (status) {
    this._isAvailable = status
}
getDetails() {
    console.log (`Title: ${this.title}, Author: ${this.position}, ISBN: ${this.ISBN}`)
}}

// Task 2: Create a Section Class

class Section {
    constructor (name) {
        this.name = name
        this.books = []
    }

addBook(book) {
    if (book instanceof Book) // checking if book is valid here
        this.books.push (book) // then adding it to the empty array 
    else console.log (`${book.title} is not a valid book.`)
}

getAvailableBooks () {
    return this.books.filter (book => book.isAvailable).length // filtering for the available books here
}

listBooks () {
    this.books.forEach (book =>
        console.log (`Title: ${book.title}, Available: ${book.isAvailable}`) // only want title and availabillity here. 
    )
}

// Task 5: Handle books Borrowing and Returning 
calculateTotalBooksAvailable () {
    return this.getAvailableBooks () // the getAvailableBooks method works for what the task is asking for 
}

}

// Task 3: Create a Patron Class

class Patron {
    constructor (name) {
        this.name = name
        this.borrowedBooks = [] // initializing empty array
    }

borrowBook(book) {
    if (book instanceof Book && book.isAvailable === true) { //checking that book is available
        this.borrowedBooks.push (book)
        book.isAvailable = false
        console.log(`${book.title} has now been borrowed by ${this.name}`); } // logging this msg after marking book false and adding it as borrowed
            else console.log (`ERROR: ${book.title} is either invalid or not available`)
}

returnBook (book) {
// let bookFinder = this.borrowedBooks.find(book => book.title === book) // checking that book was borrowed by patron
    if (book instanceof Book && this.borrowedBooks.includes(book)) {
        book.isAvailable = true // making the book available again
        this.borrowedBooks.filter(del => del !== book) // taking the book out of the array now that it's been returned using filter method
        console.log(`${book.title} has now been returned.`)
    } else {
        console.log(`ERROR:${book.title} cannot be returned. Please contact administration about the error.`)
    }
}};

// Task 4: Create VIPPatron Class that Inherits from Patron

class VIPPatron extends Patron {
    constructor (name, borrowedBooks, priority) {
        super (name, borrowedBooks)
        priority = true
    }

borrowBook (book) { // overriding parent class method 
    if (this.priority = true && this.borrowedBooks.includes(book)) {
        super.borrowBook(book) // calling back method from parent class to prevent repeat code
    } else {
        console.log (`ERROR: ${book.title} is either invalid or not available`)
    }
}}

// Task 6:

// Create sections
const fiction = new Section("Fiction");
const science = new Section("Science");

// Create books
const book1 = new Book("Captain Underpants", "Dav Pilkey", "1234567890");
const book2 = new Book("The Stranger", "Albert Camus", "0987654321");
const book3 = new Book("The Cutest Birds Ever", "Richard Dawkins", "1122334455");

// Add books to sections
fiction.addBook(book1);
fiction.addBook(book2);
science.addBook(book3);

// Create patrons
const vipPatron = new VIPPatron("Jane Smith", true);
const regularPatron = new Patron("John Doe");

// Regular patron tries to borrow a book
regularPatron.borrowBook(book1);

// VIP patron tries to borrow a book (has priority)
vipPatron.borrowBook(book1);

// Return the book
regularPatron.returnBook(book1);
// note: couldnt figure out how to do priority system for vip patrons
// List books and availability
fiction.listBooks();
// Calculate total available books in each section
console.log(`Total available books in Fiction: ${fiction.getAvailableBooks()}`);
console.log(`Total available books in Science: ${science.getAvailableBooks()}`);