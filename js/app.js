var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulisses', author: 'James Royce', available: true, category: Category.Biography },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Biography },
        { id: 3, title: 'I Know the Caged Bird Sings ', author: 'Maya Angelou', available: true, category: Category.Biography },
        { id: 4, title: 'I Mobby Dick ', author: 'herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}
function LogFirstAvailable(books) {
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
    console.log("Getting Books in category: " + Category[categoryFilter]);
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
/***************************************************************************************** */
// const ficctionBooks = GetAllBooks();
// ficctionBooks.forEach((val, idx, arr) => console.log(`${++idx} - ${val.title}`));
var Idgenerator;
Idgenerator = CreateCustomerId;
var myId = Idgenerator('Oscar', 10);
console.log(myId);
//# sourceMappingURL=app.js.map