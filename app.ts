enum Category {
    Biography,
    Poetry,
    Fiction,
    History,
    Children
}

function GetAllBooks() {
    let books = [
        { id: 1, title: 'Ulisses', author: 'James Royce', available: true, category: Category.Biography },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Poetry },
        { id: 3, title: 'I Know the Caged Bird Sings ', author: 'Maya Angelou', available: true, category: Category.Biography },
        { id: 4, title: 'I Mobby Dick ', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}

function LogFirstAvailable(books: any[] = GetAllBooks()): void {

    let munberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for (const currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log(`Total Books: ${munberOfBooks}`);
    console.log(`Fisrt Available: ${firstAvailable}`);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log(`Getting Books in category: ${Category[categoryFilter]}`);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    allBooks.forEach(element => {
        if (element.category === categoryFilter) {
            filteredTitles.push(element.title);
        }
    });

    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
    titles.forEach(element => {
        console.log(element);
    });

}

function getBookById(id: number) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerId(name: string, id: number): string {
    return `${name} --- ${id}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Creating Customer ${name}`);
    if (age) {
        console.log(`Age: ${age}`);
    }

    if (city) {
        console.log(`City: ${city}`);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: Array<number>): Array<string> {
    console.log(`Checking out books for ${customer}`);

    let booksCheckedOut: Array<string> = [];
    for (const id of bookIDs) {
        let book = getBookById(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

function GetTitles(author: string): Array<string>;
function GetTitles(available: boolean): Array<string>;

function GetTitles(bookProperty: any): Array<string> {
    const allBooks = GetAllBooks();
    const foundTitles: Array<string> = [];

    if (typeof bookProperty == 'string') {
        //get all books by a particular author
        for (const book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    } else if (typeof bookProperty == 'boolean') {
        //get all books by a particular author
        for (const book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}



/***************************************************************************************** */
// const ficctionBooks = GetAllBooks();
// ficctionBooks.forEach((val, idx, arr) => console.log(`${++idx} - ${val.title}`));

// let Idgenerator: (chars: string, nums: number) => string;
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


let hermanBooks = GetTitles(false);
hermanBooks.forEach(title => console.log(title));
