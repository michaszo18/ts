import {TodoItem} from './TodoItem';

export class TodoCollection {
    private nextId: number = 1;

    constructor(public userName: string,
                public todoItems: TodoItem[] = []) {
    }

    addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new TodoItem(this.nextId, task));
        return this.nextId;
    }

    getTodoById(id: number): TodoItem {
        return this.todoItems.find(item => item.id === id);
    }

    toggleComplete(id: number): void {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = !todoItem.complete;
        }
    }
}