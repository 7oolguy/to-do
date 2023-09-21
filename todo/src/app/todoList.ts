import { Todoitem } from "./todoItem";

export class TodoList{
    constructor(public user: string, private todoItems: Todoitem[]){
        //no statements required
    }
    get items(): readonly Todoitem[] {
        return this.todoItems;
    }
    addItems(task: string){
        this.todoItems.push(new Todoitem(task));
    }
}