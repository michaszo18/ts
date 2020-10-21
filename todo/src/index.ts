import {TodoItem} from "./TodoItem";
import {TodoCollection} from "./TodoCollection";

let todos = [
  new TodoItem(1, 'Clean room'),
  new TodoItem(2, 'Jogging'),
  new TodoItem(3, 'Read book', true),
];

let collection = new TodoCollection('Mike', todos);

console.clear();
console.log(`${collection.userName} Todo list`);

let newId = collection.addTodo('Learn TS');
let todoItem = collection.getTodoById(newId);
collection.toggleComplete(1);
collection.toggleComplete(2);
collection.toggleComplete(1);
console.log(JSON.stringify(collection));
