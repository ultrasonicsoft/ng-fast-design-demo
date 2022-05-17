import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TodoEntry } from 'src/app/todo-entry.model';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: TodoEntry;
  
  constructor() { }

  ngOnInit(): void {
  }

}
