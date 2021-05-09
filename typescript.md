
#1. Typescript 란 
* 1) 개요
기존 javascript 에 Type System을 적용한 것 ( Typescript = javascript + type system )
typescript로 작성된 코드는 typescript컴파일러(tsc)를 통해 javascript로 변환, 실행됨 
Types - Primitives Type (number, string, boolean, symbol, void, null, undefined) , Object Types (functions, classes, arrays) 
예) let year : number = 2020; 
   function sum(first: number, second:number) : number {  }  

# 2. 개발환경 
* 1) 설치 
 $npm install -g typescript ts-node   // 전역설치, typescript 및 ts-node 설치 
 ts-node 를 설치하면 컴파일과 실행을 한번에 수행할 수 있음. *.ts파일은 tsc 컴파일 과정을 거치면서 *.js로 트랜스컴파일됨 
 
$ vi hello.ts
  console.log("Hello typescript");
$ tsc hello.ts      // hello.js 파일로 트랜스컴파일됨 
$ node hello.js     // 실행결과 
  Hello typescript 

// 프로젝트 생성

$ tsc —init       //tsconfig.json 파일 생성됨. 아래 경로 확인 
      "outDir": "./build",                              /* Redirect output structure to the directory. */
     "rootDir": "./src",   
$tsc   // 자동 실행 

* 2) 실습 
$ mkdir todo-proj 후 
$ npm init -y    // package.json 파일 생성
$ npm install nodemon concurrently      // 라이브러리 설치 

$package.json 파일에서 추가하면 index.js 파일 자동 실행됨 
  "start:build": "tsc -w",      // watch mode 
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"

$npm start 

# 3. todo list 개발 
*1) Data Model 정의
   todoItem ( id, task, complete, printDetails ) 
   
   
   
   
