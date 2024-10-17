// Task 1: Create a Book Class

class Book {
constructor (title, author, ISBN, _isAvailable) {
    this.title = title
    this.author = author
    this.ISBN = ISBN
    this._isAvailable = true // default state is true here 
}
// getter
get _isAvailable () {
    return this._isAvailable
}
// setter
set _isAvailable (status) {
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
    this.books.filter (book => book._isAvailable).length // filtering for the available books here
}

listBooks () {
    this.books.forEach (book =>
        console.log (`Title: ${book.title}, Available: ${book._isAvailable}`) // only want title and availabillity here. 
    )
}}
