import TodoItem from "./TodoItem";
import { data } from "./data";
import TodoCollection from "./TodoCollection";

const sampleTodos : TodoItem[] = data.map(
    (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("my todo list ", sampleTodos);

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
