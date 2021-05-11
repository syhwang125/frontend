"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomCollection = /** @class */ (function () {
    function CustomCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CustomCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CustomCollection.prototype.compare = function (leftIndex, rightIndex) {
        return this.data[leftIndex].name.localeCompare(this.data[rightIndex].name) > 0;
    };
    CustomCollection.prototype.swap = function (leftIndex, rightIndex) {
        var temp = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temp;
    };
    return CustomCollection;
}());
exports.default = CustomCollection;
