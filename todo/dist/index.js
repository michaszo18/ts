"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoItem_1 = require("./TodoItem");
const TodoCollection_1 = require("./TodoCollection");
let todos = [
    new TodoItem_1.TodoItem(1, 'Clean room'),
    new TodoItem_1.TodoItem(2, 'Jogging'),
    new TodoItem_1.TodoItem(3, 'Read book', true),
];
let collection = new TodoCollection_1.TodoCollection('Mike', todos);
console.clear();
console.log(`${collection.userName} Todo list`);
let newId = collection.addTodo('Learn TS');
let todoItem = collection.getTodoById(newId);
collection.toggleComplete(1);
collection.toggleComplete(2);
collection.toggleComplete(1);
console.log(JSON.stringify(collection));
