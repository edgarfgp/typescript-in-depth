import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamage?: (reason: string) => void;
}

interface StringGenerator {
    (chars: string, nums: number): string;
}

interface DamageLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublish: number;
}

interface Librarian extends Person {
    departament: string;
    assistCustomer: (custName: string) => void;
}

export { Book, StringGenerator, DamageLogger as Logger, Author, Librarian }

