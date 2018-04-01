"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var classes_1 = require("./classes");
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulisses', author: 'James Royce', available: true, category: enums_1.Category.Biography },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Poetry },
        { id: 3, title: 'I Know the Caged Bird Sings ', author: 'Maya Angelou', available: true, category: enums_1.Category.Biography },
        { id: 4, title: 'I Mobby Dick ', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllBooks(); }
    var munberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books: " + munberOfBooks);
    console.log("Fisrt Available: " + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    console.log("Getting Books in category: " + enums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    allBooks.forEach(function (element) {
        if (element.category === categoryFilter) {
            filteredTitles.push(element.title);
        }
    });
    return filteredTitles;
}
function LogBookTitles(titles) {
    titles.forEach(function (element) {
        console.log(element);
    });
}
function getBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerId(name, id) {
    return name + " --- " + id;
}
function createCustomer(name, age, city) {
    console.log("Creating Customer " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log("Checking out books for " + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = getBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        //get all books by a particular author
        for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
            var book = allBooks_1[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        //get all books by a particular author
        for (var _a = 0, allBooks_2 = allBooks; _a < allBooks_2.length; _a++) {
            var book = allBooks_2[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function pPrintBook(book) {
    console.log(book.title + "  by " + book.author);
}
/***************************************************************************************** */
// const ficctionBooks = GetAllBooks();
// ficctionBooks.forEach((val, idx, arr) => console.log(`${++idx} - ${val.title}`));
// let Idgenerator : StringGenerator;
// Idgenerator = CreateCustomerId;
// let myId = Idgenerator('Oscar', 10);
// console.log(myId)
// createCustomer('Edgar');
// createCustomer('Edgar', 32);
// createCustomer('Edgar', 32, 'LONDON');
// LogFirstAvailable();
// const ficctionBooks  = GetBookTitlesByCategory();
// ficctionBooks.forEach(title =>  console.log(title));
// const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
// poetryBooks.forEach(title =>  console.log(title));
// let myBooks: Array<string> = CheckoutBooks('Throne', 1, 3, 4);
// myBooks.forEach(title => console.log(title))
// let hermanBooks = GetTitles(false);
// hermanBooks.forEach(title => console.log(title));
// let myBook : Book = {
//     id: 5,
//     title: 'Pride and Perjudice',
//     author: 'Jane Austen',
//     available: true,
//     category: Category.Fiction,
//     pages : 250,
//     markDamage : (reason: string) => console.log(`Damage: ${reason}`)
// }
// pPrintBook(myBook);
// myBook.markDamage('torn pages');
//This is de definitions of the interface 
// let logDammage : DamageLogger;
// //This is the inteface implementation
// logDammage = (damage: string) => console.log(`Damage reported: ${damage}`);
// logDammage('coffe stains');
var favouriteLibrarian = new classes_1.UniversityLibrarian();
favouriteLibrarian.name = 'Madelin';
favouriteLibrarian.assistCustomer('Oscar');
//# sourceMappingURL=app.js.map