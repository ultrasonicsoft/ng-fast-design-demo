import { Injectable } from '@angular/core';
import { TodoEntry } from './todo-entry.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private Todos: TodoEntry[] = [];

  constructor() { }

  getTodos(): TodoEntry[] {
    return this.Todos;
  }

  addTodo(Todo: TodoEntry): void {
    this.Todos.push(Todo);
  }

  removeTodo(Todo: TodoEntry): void {
    this.Todos = this.Todos.filter(t => t.id !== Todo.id);
  }

}
