"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    toString() {
        console.log(`${this.id}\t${this.task}\t ${this.complete ? "\t(done)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
