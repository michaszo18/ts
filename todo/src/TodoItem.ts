export class TodoItem {

    constructor(public id: number,
                public task: string,
                public complete: boolean = false) {
    }

    toString(): void {
        console.log(`${this.id}\t${this.task}\t ${this.complete ? "\t(done)" : ""}`)
    }
}