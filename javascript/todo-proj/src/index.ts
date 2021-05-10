import TodoItem from "./model/TodoItem";
import { data } from "./data";
import TodoCollection from "./service/TodoCollection";
import TodoConsole from "./view/TodoConsole";

// const sampleTodos : TodoItem[] = data.map(
//     (item) => new TodoItem(item.id, item.task, item.complete)
// );

// const myTodoCollection = new TodoCollection("my todo list ", sampleTodos);

const todoConsole = new TodoConsole();
todoConsole.promptUser();


// myTodoCollection.addTodo("java script ");
// myTodoCollection.addTodo("studying ");

// myTodoCollection.markComplete(3, true);

// console.log(`${myTodoCollection.userName}`);

// myTodoCollection.removeComplete();

// myTodoCollection.todoItems.forEach((item) => item.printDetails());
// console.log( '============ '); 
// myTodoCollection.getTodoItems(true).forEach((item) => item.printDetails());
// console.log( '============ '); 
// myTodoCollection.getTodoItems(false).forEach((item) => item.printDetails());


// class TodoItem {
//     constructor(id, task, complete) {
//         this.id = id;
//         this.task = task;
//         this.complete = complete;
//     }

//     printDetails() {
//         console.log(`${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`
//         );
//     }
// }

// data.ts 로 데이터 분리함 
// const data = [
//     { id:1, task:"장보기", complete : true} ,
//     { id:2, task:"학습하기", complete : false} ,
// ];

// let todoItem = new TodoItem(data[0].id, data[0].task, data[0].complete);
// console.log(todoItem);


// for ( let i = 0; i < data.length; i++) {
//     let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
//     todoItem.printDetails();
// }
