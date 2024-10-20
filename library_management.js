// Task 1: Create a Book Class

class Book {
constructor (title, author, ISBN, _isAvailable) {
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
    constructor (name, books) {
        name = this.name
        books = []
    }

addBook(book) {
    if (book instanceof Book) // checking if book is valid here
        this.books.push (book); // then adding it to the empty array 
    else console.log (`${book.title} is not a valid book.`)
}

getAvailableBooks () {
    this.books.filter (book => book.isAvailable).length // filtering for the available books here
}

listBooks () {
    this.books.forEach (book =>
        console.log (`Title: ${book.title}, Available: ${book.isAvailable}`) // only want title and availabillity here. 
    )
}}

// Task 3: Create a Patron Class

class Patron {
    constructor (name, borrowedBooks) {
        name = this.name
        borrowedBooks = [] // initializing empty array
    }

borrowBook(book) {
    if (book instanceof Book && book.isAvailable === true) { //checking that book is available
        this.borrowedBooks.push (book)
        book.isAvailable = false
        console.log(`${book.title} has now been borrowed.`); } // logging this msg after marking book false and adding it as borrowed
            else console.log (`ERROR: ${book.title} is either invalid or not available`)
}

returnBook (book) {
let bookFinder = this.borrowedBooks.find(item = item.title === book.title) // checking that book was borrowed by patron
    if (book instanceof Book & bookFinder) {
        this.borrowedBooks.isAvailable = true
        this.borrowedBooks.filter(b => b !== book) // taking the book out of the array now that it's been returned
        console.log(`${book.title} has now been returned.`)
    } else {
        console.log(`ERROR:${book.title} cannot be returned. Please contact administration about the error.`)
    }
}};
