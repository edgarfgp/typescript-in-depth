import { Book, StringGenerator, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian {
    name: string;
    email: string;
    departament: string;
    assistCustomer(custName: string) {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

abstract class ReferenceItem {

    private _publisher: string;
    static departament: string = 'Research';

    constructor(private _title: string, protected _year: number) {
        console.log('Creating a new ReferenceItem');
        console.log(`Departament: ${ReferenceItem.departament}`);
    }

    printItem(): void {
        console.log(`${this.title} as published is ${this.year}.`)
    }

    public get title(): string {
        return this._title;
    }

    public set title(newTitle: string) {
        this._title = newTitle;
    }

    public get year(): number {
        return this._year;
    }

    public set year(newYear: number) {
        this._year = newYear;
    }

    public get publisher(): string {
        return this._publisher;
    }
    public set publisher(v: string) {
        this._publisher = v;
    }

    abstract printCitation(): void;

}

class Encyclopedia extends ReferenceItem {


    constructor(newTitle: string, newYear: number, private _edition: number) {
        super(newTitle, newYear);

    }

    printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} year ${this.year}`)
    }

    public get edition(): number {
        return this._edition;
    }
    public set edition(v: number) {
        this._edition = v;
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }

}



export { UniversityLibrarian, ReferenceItem, Encyclopedia }