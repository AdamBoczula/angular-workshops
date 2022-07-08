import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CostsStoreFacadeService } from '../cost-store-facade/costs-store-facade.service';
import { Cost } from '../models';

@Component({
  selector: 'app-cost-reactive-form',
  template: `
    <form class="form" [formGroup]="costForm"  (ngSubmit)="addCost()">
      <div class="inputs">
        <label for="costTitle">
          <span>Tytuł</span>
          <input type="text" name="costTitle" formControlName="title">
        </label>

        <label for="costCategory">
          <span>Kategoria</span>
          <select name="costCategory" formControlName="category">
            <option value="TODO">TODO</option>
          </select>
        </label>

        <label for="costPrice">
          <span>Cena</span>
          <input type="number" name="costPrice" formControlName="price">
        </label>
      </div>

      <button type="submit">
        Dodaj
      </button>
    </form>
  `,
  styleUrls: ['./cost-reactive-form.component.scss']
})
export class CostReactiveFormComponent {
  @Output()
  public onAddCost = new EventEmitter<Cost>();

  public costForm = new FormGroup({
    title: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(0),
  });

  public addCost(): void {
    this.onAddCost.emit(this.costForm.value as Cost);
    this.costForm.reset();
  }
}
