
let numbers = [10,6,7,9,11];

// let numbers = new Array(10, 6, 9, 11, 20);
console.log(numbers);

for (let i=0; i < numbers.length; i++) {
    console.log(`Index[${i}] : ${numbers[i]}`);
}

for(let number of numbers) {
    console.log(`value : ${number}`);
}

numbers.push(55);       // 마지막 요소 추가 
console.log(numbers);

numbers.pop();          //마지막 요소 제거
console.log(numbers);   

numbers.unshift(-55)
console.log(numbers);   
numbers.shift();
console.log(numbers);   

numbers.map( number => console.log(`number : ${number}`) );   // 순회
let evenNumbers = numbers.filter( number => number % 2 === 0 );  // 필터 
evenNumbers.map( number => console.log(`number : ${number}`));   // 필터 결과 

// $node Array.mjs 

let customer = { id : 'aaa', name : 'kim' };
for ( const key in customer) {
    console.log(key + ' : ' + customer[key]); 
}

// 생성자 함수 선언 
let Person = function ( name, id) {
    this.name = name;
    this.id = id;
}

let person01 = new Person('Kim', 'A1234');
person01.age = 30;
console.log(person01);

let person02 = new Person('Lee', 'B1234');
console.log(person02);

// let name = person01.name;
// let id = person01.id; 
let { name, id } = person01;    // person01 의 값을 한번에 가져옴 
console.log(name);
console.log(id);