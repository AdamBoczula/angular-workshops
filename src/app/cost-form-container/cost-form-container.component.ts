import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CostsStoreFacadeService } from '../cost-store-facade/costs-store-facade.service';
import { Cost } from '../models';

@Component({
  selector: 'app-cost-form-container',
  template: `
  <div *ngIf="isReactiveF; else templateF">
    <app-cost-reactive-form (onAddCost)="addCost($event)">
    </app-cost-reactive-form>
  </div>
  <ng-template #templateF>
    <app-cost-template-driven-form (onAddCost)="addCost($event)"></app-cost-template-driven-form>
  </ng-template>

  <app-budget-list [costs]="(costs$ | async) ?? []"></app-budget-list>
  `,
  styleUrls: ['./cost-form-container.component.scss']
})
export class CostFormContainerComponent {
  public costs$: Observable<Cost[]> = this.costStoreFacade.getCosts();
  public isReactiveF = false;

  constructor(private costStoreFacade: CostsStoreFacadeService, private router: Router) {
      console.log('router.url: ', this.router.url);
      this.isReactiveF = this.router.url.toLowerCase().includes('reactive');
  }

  public addCost(newCost: Cost): Observable<Cost> {
    return this.costStoreFacade.addCost(newCost);
  }
}
