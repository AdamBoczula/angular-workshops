import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormsComponent } from './login-forms/login-forms.component';
import { FormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';


@NgModule({
  declarations: [
    LoginComponent,
    LoginFormsComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    UiModule
  ]
})
export class LoginModule { }
