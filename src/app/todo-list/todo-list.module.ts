import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';

import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
  fastTextField,
} from "@microsoft/fast-components";
import { ReactiveFormsModule } from '@angular/forms';
import { TodoItemModule } from './todo-item/todo-item.module';

provideFASTDesignSystem()
  .register(
    fastCard(),
    fastButton(),
    fastTextField(),
  );

@NgModule({
  declarations: [
    TodoListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodoItemModule,
  ],
  exports: [
    TodoListComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class TodoListModule { }
