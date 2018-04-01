import { Category } from './enums';
import { Book, StringGenerator, Logger, Author, Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import Encyclopedia from './encyclopedia'
import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from './lib/utilityFunctions';

// let fee = CalcFee(5);
// let max = MaxBooksAllowed(12);

function GetAllBooks(): Array<Book> {
    let books:  Array<Book> = [
        { id: 1, title: 'Ulisses', author: 'James Royce', available: true, category: Category.Biography },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Poetry },
        { id: 3, title: 'I Know the Caged Bird Sings ', author: 'Maya Angelou', available: true, category: Category.Biography },
        { id: 4, title: 'I Mobby Dick ', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    let purgedBooks: Array<Book> = Purge<Book>(books);
    purgedBooks.forEach(book => console.log(book));

    return purgedBooks;
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

function getBookById(id: number): Book {
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

function pPrintBook(book: Book): void {
    console.log(`${book.title}  by ${book.author}`)
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
// let logDammage : Logger;
// //This is the inteface implementation
// logDammage = (damage: string) => console.log(`Damage reported: ${damage}`);
// logDammage('coffe stains');

// let favouriteLibrarian : Librarian = new UniversityLibrarian();
// favouriteLibrarian.name = 'Madelin';
// favouriteLibrarian.assistCustomer('Oscar');

// let ref: ReferenceItem = new ReferenceItem('Facts and Figures', 2016);
// ref.publisher = 'Ramdon Data Publishing'
// ref.printItem();
// console.log(ref.publisher)

// let ref = new Encyclopedia('World Encyclopedia',2018, 10);
// //ref.printItem();
// ref.printCitation();

// let newsPaper = class extends ReferenceItem {
//     printCitation(): void {
//         console.log(`NewsPaper: ${this.title}`);
//     }
// }

// let myPaper = new newsPaper('The Gazette', 1986);
// myPaper.printCitation();


// class Novel extends class { title: string } {
//     mainCharecater: string;
// }

// let favouriteNovel = new Novel();
// favouriteNovel.mainCharecater = 'Garcia Marquez';


GetAllBooks();

let purgedNumbers: Array<number> = Purge<number>([1,2,3,4,5,6]);

purgedNumbers.forEach(nums => console.log(nums));
