import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


import {
  provideFASTDesignSystem,
  fastCard,
  fastButton,
  fastTextField
} from '@microsoft/fast-components';
import { FormsModule } from '@angular/forms';

provideFASTDesignSystem()
  .register(
    fastCard(),
    fastButton(),
    fastTextField()
  );

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
