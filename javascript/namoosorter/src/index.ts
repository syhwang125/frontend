import NamooSorter from './NamooSorter';

let sorter = new NamooSorter([10, -7, 32, 4, 15]);
console.log(sorter.sort());

 sorter= new NamooSorter('TypeScript ');
console.log(sorter.sort());


let data : string | number[];

function isString(data : string | number[]):data is string {
    return ( <string>data ).split !== undefined;
}

data = 'TypeScript';
if(isString(data)) {
    data.split('');
} else {
    // number[]
}
// 실행 
// $tsc
// $node build/index.js 