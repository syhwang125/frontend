"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NamooSorter_1 = __importDefault(require("./NamooSorter"));
var CustomerCollection_1 = __importDefault(require("./CustomerCollection"));
var Customer_1 = require("./Customer");
// let numCollection = new NumbersCollection([10, -7, 32, 4, 15]);
// let charCollection = new CharactersCollection ('TypeScript');
var customerCollection = new CustomerCollection_1.default([
    new Customer_1.Customer('AAA', 'Kim'),
    new Customer_1.Customer('BBB', 'Park'),
    new Customer_1.Customer('CCC', 'Choi'),
]);
// let sorter = new NamooSorter(numCollection);
// let sorter = new NamooSorter( charCollection );
var sorter = new NamooSorter_1.default(customerCollection);
sorter.sort();
console.log(sorter.printCollection());
// let sorter = new NamooSorter([10, -7, 32, 4, 15]);
// console.log(sorter.sort());
// sorter= new NamooSorter('TypeScript ');
// console.log(sorter.sort());
// let data : string | number[];
// function isString(data : string | number[]):data is string {
//     return ( <string>data ).split !== undefined;
// }
// data = 'TypeScript';
// if(isString(data)) {
//     data.split('');
// } else {
//     // number[]
// }
// 실행 
// $tsc
// $node build/index.js 
