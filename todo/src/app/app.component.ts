import { Component } from '@angular/core';
import { TodoList } from './todoList';
import { Todoitem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  private list = new TodoList("Bob", [
    new Todoitem("Go for a run", true),
    new Todoitem("Get Flowers"),
    new Todoitem("Collect Tickets"),
  ]);

  get username(): string{
    return this.list.user;
  }
  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }
  get items(): readonly Todoitem[]{
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }
  addItem(newItem: string){
    if(newItem != ''){
      this.list.addItems(newItem);
    }
  }
  showComplete: boolean = false;
}
