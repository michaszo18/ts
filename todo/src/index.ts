import { TodoItem } from "./TodoItem";
import { TodoCollection } from "./TodoCollection";
import * as inquirer from "inquirer"

let todos = [
  new TodoItem(1, 'Clean room'),
  new TodoItem(2, 'Jogging'),
  new TodoItem(3, 'Read book', true),
];

let collection = new TodoCollection('Mike', todos);

function displayTodoList(): void {
  
  console.log(`${collection.userName} Todo list`);
  console.log(`Liczba zadań do wykonania ${collection.getItemCounts().incomplete}/${collection.getItemCounts().total}`);

  collection.getTodoItems(true).forEach(item => item.toString());
}

enum Commands {
  Quit = "Koniec"
}

function promptUser(): void {
  console.clear();
  displayTodoList();
  inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Wybierz opcje',
    choices: Object.values(Commands)
  }).then(answers => {
    if(answers.command !== Commands.Quit) {
      promptUser();
    }
  })
}

promptUser();