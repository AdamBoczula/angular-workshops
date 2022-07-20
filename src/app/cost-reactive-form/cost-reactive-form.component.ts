import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cost } from '../models';

@Component({
  selector: 'app-cost-reactive-form',
  template: `
    <form class="form" [formGroup]="costForm"  (ngSubmit)="addCost()">
      <div class="inputs">
        <label for="costTitle">
          <span>Tytuł</span>
          <input type="text" name="costTitle" formControlName="title">
          <app-error-msg *ngIf="isTitleError && submitted" msg="Uliluli Tytuł Dodaj"></app-error-msg>
        </label>

        <label for="costCategory">
          <span>Kategoria</span>
          <select name="costCategory" formControlName="category">
            <option value="TODO">TODO</option>
          </select>
          <app-error-msg *ngIf="isCategoryError && submitted" msg="Uliluli Kategorię Dodaj"></app-error-msg>
        </label>

        <label for="costPrice">
          <span>Cena</span>
          <input type="number" step="0.1" name="costPrice" formControlName="price">
          <app-error-msg *ngIf="isPriceError && submitted" msg="Uliluli Cenę Dodaj"></app-error-msg>
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
  public submitted = false;
  public costForm = new FormGroup({
    title: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.compose(
      [Validators.min(0.1), Validators.required]))
  });

  public addCost(): void {
    this.submitted = true;
    if (this.costForm.valid) {
      this.onAddCost.emit(this.costForm.value as Cost);
      this.costForm.reset();
      this.submitted = false;
    }
  }

  get isTitleError(): boolean {
    return !this.costForm.controls.title.valid;
  }

  get isCategoryError(): boolean {
    return !this.costForm.controls.category.valid;
  }

  get isPriceError(): boolean {
    return !this.costForm.controls.price.valid;
  }
}
