import {ReferenceItem} from './classes';

export  default class Encyclopedia  extends ReferenceItem {

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