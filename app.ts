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
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Biography },
        { id: 3, title: 'I Know the Caged Bird Sings ', author: 'Maya Angelou', available: true, category: Category.Biography },
        { id: 4, title: 'I Mobby Dick ', author: 'herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}

function LogFirstAvailable(books: any[]): void {

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

function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
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

function getBookById(id : number){
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerId(name: string, id: number): string{
    return  `${name} --- ${id}`;
}

/***************************************************************************************** */
// const ficctionBooks = GetAllBooks();
// ficctionBooks.forEach((val, idx, arr) => console.log(`${++idx} - ${val.title}`));


let Idgenerator: (chars: string, nums: number) => string;
Idgenerator = CreateCustomerId;

let myId = Idgenerator('Oscar', 10);

console.log(myId)



