import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  public costForm = new FormGroup({
    title: new FormControl(''),
    category: new FormControl(''),
    price: new FormControl(0),
  });

  public addCost(): void {
    console.log('dodaliśmy hasjy:', this.costForm.value);
  }
}
