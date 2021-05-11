import NamooSorter from './NamooSorter';
import NumbersCollection from './NumbersCollection';
import CharactersCollection from './CharactersCollection';
import CustomerCollection from './CustomerCollection';
import { Customer } from './Customer';

// let numCollection = new NumbersCollection([10, -7, 32, 4, 15]);
// let charCollection = new CharactersCollection ('TypeScript');
let customerCollection = new CustomerCollection([
    new Customer('AAA','Kim'),
    new Customer('BBB','Park'),
    new Customer('CCC','Choi'),
])

// let sorter = new NamooSorter(numCollection);
// let sorter = new NamooSorter( charCollection );
let sorter = new NamooSorter ( customerCollection) ;
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