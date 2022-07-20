import { Component, Input, OnInit } from '@angular/core';
import { Cost } from '../models';

@Component({
  selector: 'app-budget-list',
  template: `
    <ng-container *ngIf="costs.length > 0; else emptyList">
      <app-budget-item *ngFor="let cost of costs" [cost]="cost">
      </app-budget-item>
    </ng-container>
    <ng-template #emptyList>
      Dodaj Koszta
    </ng-template>

  `,
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent {
  @Input()
  public costs: Cost[] = [];

}
