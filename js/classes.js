"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UniversityLibrarian = /** @class */ (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(_title, _year) {
        this._title = _title;
        this._year = _year;
        console.log('Creating a new ReferenceItem');
        console.log("Departament: " + ReferenceItem.departament);
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " as published is " + this.year + ".");
    };
    Object.defineProperty(ReferenceItem.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (newTitle) {
            this._title = newTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReferenceItem.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (newYear) {
            this._year = newYear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher;
        },
        set: function (v) {
            this._publisher = v;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.departament = 'Research';
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
//# sourceMappingURL=classes.js.map