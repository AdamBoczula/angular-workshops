import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { UiModule } from '../ui/ui.module';
import { TemplateFormsRoutingModule } from './template-forms-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TemplateFormsRoutingModule,
    FormsModule,
    UiModule,
  ]
})
export class TemplateFormsModule { }
