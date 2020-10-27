import { TodoItem } from "./TodoItem";
import { TodoCollection } from "./TodoCollection";

let todos = [
  new TodoItem(1, 'Clean room'),
  new TodoItem(2, 'Jogging'),
  new TodoItem(3, 'Read book', true),
];

let collection = new TodoCollection('Mike', todos);

console.clear();
console.log(`${collection.userName} Todo list`);
console.log(`Liczba zadań do wykonania ${collection.getItemCounts().incomplete}/${collection.getItemCounts().total}`);

collection.getTodoItems(true).forEach(item => item.toString());
