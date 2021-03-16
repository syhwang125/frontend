testFunc01();

// 함수 선언문
function testFunc01() {
    console.log("Test Function");
}

// testFunc02();   선언전에 호출하면 오류 발생 
// 함수 표현식 
let testFunc02 = function()  {
    console.log("Test Function2");
}
testFunc02();

// terminal 에서 $node Calculator.js 를 실행하면 결과 출력됨. 

// npm install readline-sync 
// const readLine = require('readline-sync');

import { question } from 'readline-sync';

function showPrompt() {
    console.clear();
    // const testStr = readLine.question('Enter test message : ');
    const firstNumber = question('Enter first number : ');
    const operation = question('Enter operation : ');
    const secondNumber = question('Enter second number : ');

    const validation = isNumber(firstNumber) && isOperation(operation) && isNumber(secondNumber);
    if(validation) {
        let result = calculate(parseInt(firstNumber), operation, parseInt(secondNumber) );
        console.log(`Result : ${result}`);
    } else {
        console.log( ' Invalid Input ');
    }

    console.log(isNumber(firstNumber));
}

function isNumber( number ) {
    return !isNaN(parseInt(number));
}

function isOperation( operation ) {
    let operations = '+-*/';
    return operations.indexOf(operation) !== -1;
}

function calculate(firstNumber, operation, secondNumber) {
    switch(operation) {
        case '+' : return firstNumber + secondNumber; 
        case '-' : return firstNumber - secondNumber; 
        case '*' : return firstNumber * secondNumber; 
        case '/' : return firstNumber / secondNumber; 
    }
    
}
showPrompt();

// Modules : ES6에 정의된 API임. Babel같은 transpiler와 함꼐 사용
// 모듈의 형태는 Named Module, Default Module 
// 모듈의 선언은 export 키워드 이용(변수,함수,클래스 모두 가능)
// 모듈 사용은 import 키워드 사용

// $node --experimental-json-modules Calculator.mjs 
