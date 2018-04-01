export function CalculateLateFee(daysLate: number) {
    return daysLate * 2.5;
}

export function MaxBooksAllowed(age: number): number {
    if (age < 12) {
        return 3;
    } else {
        return 10;
    }
}

export function Purge<T>(inventory: Array<T>): Array<T> {
    return inventory;
}


function privateFunction() {
    console.log('this is private');
}