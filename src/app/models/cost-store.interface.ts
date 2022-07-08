import { Observable } from "rxjs"
import { Cost } from "./cost.interface"

export interface CostStore {
  addCost(newCost: Cost): Observable<Cost>;

  addCostsList(newCost: Cost[]): Observable<Cost[]>;

  getCosts(): Observable<Cost[]>;

  getCost(costId: number): Observable<Cost>;

  editCost(editedCost: Cost[]): Observable<Cost>;

  deleteCost(costId: number): Observable<Cost>;
}
