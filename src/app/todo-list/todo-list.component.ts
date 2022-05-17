import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../task.service';
import { TodoEntry } from '../todo-entry.model';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {

  newTaskForm: FormGroup = new FormGroup({
    newTask: new FormControl('', Validators.required)
  });

  allTodos: TodoEntry[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.allTodos = this.todoService.getTodos();
  }

  addTask() {
    const newTask: TodoEntry = {
      id: Math.random(),
      title: this.newTaskForm.value.newTask,
      completed: false
    };
    this.todoService.addTodo(newTask);
    this.newTaskForm.reset();
  }

}
