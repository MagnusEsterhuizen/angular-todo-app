import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  @Output() addItem: EventEmitter<any> = new EventEmitter();

  title: string;


  constructor() { }

  ngOnInit() {
  }

  handleAdd() {
    const item = {
      title: this.title,
      complete: false
    }
    
    this.addItem.emit(item);
  }
}
