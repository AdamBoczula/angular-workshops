import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';


@NgModule({
  declarations: [  ],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    ReactiveFormsModule,
    UiModule,
  ]
})
export class ReactiveModule { }
