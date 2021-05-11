"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NamooSorter = /** @class */ (function () {
    // 1.constructor (private numbers : number[]) {}
    // 2.constructor (private collection : number[] | string) {}   // union type 
    // constructor(private collection : NumbersCollection) {} 
    function NamooSorter(collection) {
        this.collection = collection;
    }
    Object.defineProperty(NamooSorter.prototype, "getCollection", {
        get: function () {
            return this.collection;
        },
        enumerable: false,
        configurable: true
    });
    // 1.NamooSorter() : number[] {
    // 2.sort() : number[] | string {
    NamooSorter.prototype.sort = function () {
        var length = this.collection.length; //this.numbers;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
                // 2. union type 인 경우 
                // if(typeof this.collection === 'string') {
                //     if(this.collection[j].toLowerCase() > this.collection[j+1].toLowerCase()) {
                //         const characters = this.collection.split('');
                //         const temp = characters[j];
                //         characters[j] = characters[j+1];
                //         characters[j+1] = temp;
                //         this.collection = characters.join('');
                //     }
                // } 
                // if (this.collection instanceof Array) {
                //     if(this.collection[j] > this.collection[j+1]) {
                //         const temp = this.collection[j];
                //         this.collection[j] = this.collection[j+1];
                //         this.collection[j+1] = temp;                          
                //     }
                // }
                // 1. number type 인 경우 
                // if (this.numbers[j] > this.numbers[j+1]) {
                //     // swap
                //     const temp = this.numbers[j];
                //     this.numbers[j] = this.numbers[j+1];
                //     this.numbers[j+1] = temp;
                // }
            }
        }
        // return this.collection;
    };
    NamooSorter.prototype.printCollection = function () {
        console.log(this.collection);
    };
    return NamooSorter;
}());
exports.default = NamooSorter;
