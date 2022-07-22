import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cost } from 'src/app/models';

@Component({
  selector: 'app-cost-template-driven-form',
  template: `
    <form class="form" #costForm="ngForm" (ngSubmit)="addCost()">
      <div class="inputs">
        <label for="title">
          <span>Tytuł</span>
          <input type="text" name="title" [(ngModel)]="cost.title" required>
          <app-error-msg *ngIf="costForm.submitted && isTitleError" msg="Uliluli Tytuł Dodaj">
          </app-error-msg>
        </label>

        <label for="category">
          <span>Kategoria</span>
          <select name="category" [(ngModel)]="cost.category" required>
            <option value="TODO">TODO</option>
          </select>
          <app-error-msg *ngIf="costForm.submitted && isCategoryError" msg="Uliluli Kategorię Dodaj">
          </app-error-msg>
        </label>

        <label for="price">
          <span>Cena</span>
          <input type="number" step="0.1" name="price" [(ngModel)]="cost.price" required min="0.1">
          <app-error-msg *ngIf="costForm.submitted && isPriceError" msg="Uliluli Cenę Dodaj">
          </app-error-msg>
        </label>
      </div>

      <button type="submit">
        Dodaj
      </button>
    </form>
  `,
  styleUrls: ['./cost-template-driven-form.component.scss']
})
export class CostTemplateDrivenFormComponent {
  @Output()
  public onAddCost = new EventEmitter<Cost>();
  @ViewChild('costForm')
  public costForm!: NgForm;
  public cost: Cost = {} as Cost;
  public addCost(): void {
    if (this.costForm.valid) {
      this.onAddCost.emit(this.costForm.value as Cost);
      this.costForm.resetForm();
    }
  }

  get isTitleError(): boolean {
    return !(this.costForm.controls['title']?.valid)
  }

  get isCategoryError(): boolean {
    return !(this.costForm.controls['category']?.valid)

  }

  get isPriceError(): boolean {
    return !(this.costForm.controls['price']?.valid)

  }

}
