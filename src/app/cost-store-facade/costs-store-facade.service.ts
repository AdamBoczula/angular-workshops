import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CostsStoreService } from '../cost-store/costs-store.service';
import { Cost, CostStore } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CostsStoreFacadeService implements CostStore {
  constructor(private costStore: CostsStoreService) {}

  public addCost(newCost: Cost): Observable<Cost> {
    return this.costStore.addCost(newCost);
  }

  public addCostsList(newCosts: Cost[]): Observable<Cost[]> {
    return this.costStore.addCostsList(newCosts);
  }

  public getCosts(): Observable<Cost[]> {
    return this.costStore.getCosts();
  }

  public getCost(costId: number): Observable<Cost> {
    throw new Error('Method not implemented.');
  }

  public editCost(editedCost: Cost[]): Observable<Cost> {
    throw new Error('Method not implemented.');
  }

  public deleteCost(costId: number): Observable<Cost> {
    throw new Error('Method not implemented.');
  }
}
