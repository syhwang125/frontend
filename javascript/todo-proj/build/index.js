"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = __importDefault(require("./TodoItem"));
const data_1 = require("./data");
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const sampleTodos = data_1.data.map((item) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default("my todo list ", sampleTodos);
myTodoCollection.addTodo("java script ");
myTodoCollection.addTodo("studying ");
myTodoCollection.markComplete(3, true);
console.log(`${myTodoCollection.userName}`);
myTodoCollection.todoItems.forEach((item) => item.printDetails());
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
// let todoItem = new TodoItem(data[0].id, data[0].task, data[0].complete);
// console.log(todoItem);
// for ( let i = 0; i < data.length; i++) {
//     let todoItem = new TodoItem(data[i].id, data[i].task, data[i].complete);
//     todoItem.printDetails();
// }
