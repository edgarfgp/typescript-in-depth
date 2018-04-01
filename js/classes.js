"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear, _edition) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this._edition = _edition;
        return _this;
    }
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("Edition: " + this.edition + " year " + this.year);
    };
    Object.defineProperty(Encyclopedia.prototype, "edition", {
        get: function () {
            return this._edition;
        },
        set: function (v) {
            this._edition = v;
        },
        enumerable: true,
        configurable: true
    });
    Encyclopedia.prototype.printCitation = function () {
        console.log(this.title + " - " + this.year);
    };
    return Encyclopedia;
}(ReferenceItem));
exports.Encyclopedia = Encyclopedia;
//# sourceMappingURL=classes.js.map