import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Zapisywanie wydatków</h1>
    <app-page-wrapper></app-page-wrapper>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'budget-planner';
}
