import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostFormContainerComponent } from '../cost-form-container/cost-form-container.component';

const routes: Routes = [
  {
    path: '',
    component: CostFormContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
