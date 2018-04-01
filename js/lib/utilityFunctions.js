"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CalculateLateFee(daysLate) {
    return daysLate * 2.5;
}
exports.CalculateLateFee = CalculateLateFee;
function MaxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.MaxBooksAllowed = MaxBooksAllowed;
function Purge(inventory) {
    return inventory;
}
exports.Purge = Purge;
function privateFunction() {
    console.log('this is private');
}
//# sourceMappingURL=utilityFunctions.js.map