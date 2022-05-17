import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListModule } from './todo-list/todo-list.module';

import {
  provideFASTDesignSystem,
  fastToolbar,
} from "@microsoft/fast-components";

provideFASTDesignSystem()
  .register(
    fastToolbar()
  );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoListModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
