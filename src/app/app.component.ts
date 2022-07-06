import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Zapisywanie wydatków</h1>
    <!-- Formularz -->
    <app-cost-form-container></app-cost-form-container>

    <!-- lista wydatków -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'budget-planner';
}
