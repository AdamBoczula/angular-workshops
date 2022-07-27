import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UiModule } from '../ui/ui.module';
import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    UiModule,
  ]
})
export class ReactiveModule { }
