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
var classes_1 = require("./classes");
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
}(classes_1.ReferenceItem));
exports.default = Encyclopedia;
