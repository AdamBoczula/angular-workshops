import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, withLatestFrom } from 'rxjs';
import { Cost, CostStore } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CostsStoreService implements CostStore {
  // @ts-ignore: Unreachable code error
  private costs: BehaviorSubject<Cost[]> = new BehaviorSubject([]);
  private costObs: Observable<Cost[]> = this.costs.asObservable();

  public addCost(newCost: Cost): Observable<Cost> {
    // change to rxjs
    this.costs.next([...this.costs.value, newCost]);
        return of(newCost);
  }

  public addCostsList(newCosts: Cost[]): Observable<Cost[]> {
    this.costs.next([...newCosts]);
    return of([...newCosts]);
  }

  public getCosts(): Observable<Cost[]> {
    return this.costObs;
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
