import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';

import {
  provideFASTDesignSystem,
  fastSwitch
} from "@microsoft/fast-components";

provideFASTDesignSystem()
  .register(
    fastSwitch(),
  );


@NgModule({
  declarations: [
    TodoItemComponent,
  ],
  exports: [
    TodoItemComponent,
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class TodoItemModule { }
