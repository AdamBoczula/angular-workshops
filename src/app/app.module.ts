import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CostFormContainerComponent } from './cost-form-container/cost-form-container.component';
import { CostReactiveFormComponent } from './cost-reactive-form/cost-reactive-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetItemComponent } from './budget-item/budget-item.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { CostTemplateDrivenFormComponent } from './cost-template-driven-form/cost-template-driven-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CostFormContainerComponent,
    CostReactiveFormComponent,
    BudgetListComponent,
    BudgetItemComponent,
    ErrorMsgComponent,
    CostTemplateDrivenFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
