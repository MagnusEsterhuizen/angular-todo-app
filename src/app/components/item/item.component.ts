import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

import { TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  @Input() item: Todo;
  @Input() i: number;
  @Output() deleteItem: EventEmitter<Todo> = new EventEmitter();

  

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  setClasses(item:Todo) {
    let classes = {
      title: true,
      complete: item.complete
    }
    return classes;
  }

  handleComplete(item:Todo){
    //ui
    item.complete = !this.item.complete;

    //server
    this.todoService.completeItem(item).subscribe(i => {
      console.log("i:", i);
    });
  }

  handleDelete(item:Todo){
    this.deleteItem.emit(item);
  }

}
