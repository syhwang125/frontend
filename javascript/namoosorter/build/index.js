"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NamooSorter_1 = __importDefault(require("./NamooSorter"));
var sorter = new NamooSorter_1.default([10, -7, 32, 4, 15]);
console.log(sorter.sort());
sorter = new NamooSorter_1.default('TypeScript ');
console.log(sorter.sort());
var data;
function isString(data) {
    return data.split !== undefined;
}
data = 'TypeScript';
if (isString(data)) {
    data.split('');
}
else {
    // number[]
}
// 실행 
// $tsc
// $node build/index.js 
