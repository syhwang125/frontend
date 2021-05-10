"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NamooSorter = /** @class */ (function () {
    // constructor (private numbers : number[]) {}
    function NamooSorter(collection) {
        this.collection = collection;
    }
    // NamooSorter() : number[] {
    NamooSorter.prototype.sort = function () {
        var length = this.collection.length; //this.numbers;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (typeof this.collection === 'string') {
                    if (this.collection[j].toLowerCase() > this.collection[j + 1].toLowerCase()) {
                        var characters = this.collection.split('');
                        var temp = characters[j];
                        characters[j] = characters[j + 1];
                        characters[j + 1] = temp;
                        this.collection = characters.join('');
                    }
                }
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
                // if (this.numbers[j] > this.numbers[j+1]) {
                //     // swap
                //     const temp = this.numbers[j];
                //     this.numbers[j] = this.numbers[j+1];
                //     this.numbers[j+1] = temp;
                // }
            }
        }
        return this.collection;
    };
    return NamooSorter;
}());
exports.default = NamooSorter;
