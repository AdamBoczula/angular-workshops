import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BudgetItemComponent } from '../budget-item/budget-item.component';
import { BudgetListComponent } from '../budget-list/budget-list.component';
import { CostFormContainerComponent } from '../cost-form-container/cost-form-container.component';
import { ErrorMsgComponent } from '../error-msg/error-msg.component';
import { CostReactiveFormComponent } from '../reactive-forms/cost-reactive-form/cost-reactive-form.component';
import { CostTemplateDrivenFormComponent } from '../template-forms/cost-template-driven-form/cost-template-driven-form.component';



@NgModule({
  declarations: [
    CostTemplateDrivenFormComponent,
    CostFormContainerComponent,
    BudgetListComponent,
    BudgetItemComponent,
    ErrorMsgComponent,
    CostReactiveFormComponent
  ],
  exports: [
    CostTemplateDrivenFormComponent,
    CostFormContainerComponent,
    BudgetListComponent,
    BudgetItemComponent,
    ErrorMsgComponent,
    CostReactiveFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
