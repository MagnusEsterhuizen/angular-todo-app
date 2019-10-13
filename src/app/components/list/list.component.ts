import { Component, OnInit } from '@angular/core';
import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  items: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getItems().subscribe(i => {
      this.items = i;
    });
  }

  deleteItem(item: Todo) {
    //UI
    this.items = this.items.filter(i => i.id !== item.id);

    //server
    this.todoService.deleteItem(item).subscribe(() => {
      //UI
      //this.items = this.items.filter(t => t.id !== todo.id);
    });
  }

  addItem(item: Todo) {
    //UI
    //this.items.unshift(item);

    //server
    this.todoService.addItem(item).subscribe(i => {
      //UI
      this.items.unshift(i);
    });
  }

}
