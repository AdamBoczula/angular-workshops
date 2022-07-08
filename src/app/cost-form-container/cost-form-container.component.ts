import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CostsStoreFacadeService } from '../cost-store-facade/costs-store-facade.service';
import { Cost } from '../models';

@Component({
  selector: 'app-cost-form-container',
  template: `
    <app-cost-reactive-form (onAddCost)="addCost($event)">
    </app-cost-reactive-form>

    <p *ngFor="let cost of costs$ | async">
      {{cost | json}}
    </p>
`,
  styleUrls: ['./cost-form-container.component.scss']
})
export class CostFormContainerComponent {
  public costs$: Observable<Cost[]> = this.costStoreFacade.getCosts();

  constructor(private costStoreFacade: CostsStoreFacadeService) {}

  public addCost(newCost: Cost): Observable<Cost> {
    return this.costStoreFacade.addCost(newCost);
  }
}
