
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
   
   접근지정자  : private, public, protected 
   
*2) 합수
선언적 함수 
  function add(n1: number, n2:number) : number {
      return n1+n2;
  }
익명 함수
  const add = function(n1:number, n2:number) : number {
    return n1+n2;
  }
람다 함수 
  const add:(n1:number, n2:number) => number = (n1:number, n2:number) : number => {
     return n1+n2;
  }
  
 Typescript에서는 가변인자를 허용하지 않음. 함수 오버로딩을 통해 가변인자와 같은 효과 
 
 *3) todo list project practice 
  tsconfig.json 파일에서     "target": "es6",    로 설정 변경 
   
   // input param 의 타입과 return type 을 정의함 
   markComplete(id : number , complete:boolean) : void  { } 
   // 함수의 반환값이 없을 경우 void 타입의 반환을 정의함 (undefined, null 값만 대입 가능)
   // 함수의 반환값으로 정의가능한 never 타입은 절대 발생하지 않는 값의 타입을 나타냄 

*4) 실행
/javascript/todo-proj/src/index.ts, TodoItem.ts, data.ts 등 구현 
todo-proj>npm start 
$npm start 

#4. Generics 
*1) 제너릭 (Generic) 
   재사용 가능한 클래스, 함수를 만들기 위해 다양한 타입에서 사용가능하도록 하는 것 
   제너릭이 적용된 대상(클래스, 함수, 인터페이스) 선언 시점이 아닌 생성 시점에 사용하는 타입을 결정함. 
   
*2) Type alias 
   export type ItemCounts = {
    total : number;
    incomplete : number;
   }
   
*3) inquirer 설치 
  $npm i inquirer @types/inquirer 
  
*4) 실행
  $npm start. 또는  $node build/index.js 
  
*5)enum type 
   상수관리하기 위한 객체로 상수의 집합을 정의함. 열거형 타입은 숫자, 문자열만 허용 
   export enum Commands {
       Quit = "Quit",
       Add = "Add",
       Toggle="Show/Hide",
   }

#5. Todo list 개발
*1) add, remove, complete, show/hide 실행
    $tsc       //컴파일
    $node build/index.js      //실행 (또는 $npm start) 
    
    
answers["complete"] as number[];   // as 는 typescript 의 assertion   
   
#6. sorting 
*1) union type 
   | 연산자를 이용해서 정의함 
   각 타입이 갖는 고유멤버는 사용할 수 없음. 
   Shape : any - Line, Rectangle 의 공통 멤버들 color(), drawing() 만 사용할 수 있음.  
*2) 타입 가드(Type Guard)
  특정영역에서 해당 변수의 타입을 한정시켜 주는 기능 
  타입가드는  사용자가 정의하거나 
           number, string, boolean, Symbol의 경우 typeof의 연산자를 이용함
  
 *3) NamooSorter 실습
    $tsc    컴파일
    $node build/index.js   실행 
    
     
  
