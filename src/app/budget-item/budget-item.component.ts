import { Component, Input, OnInit } from '@angular/core';
import { Cost } from '../models';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.scss']
})
export class BudgetItemComponent  {
  @Input()
  public cost: Cost = {} as Cost;
}
