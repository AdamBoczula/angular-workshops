import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
  <div class="links-container">
  <button (click)="redirectLogin()">Go Login</button>
    <a routerLink="/templateDrivenF">Template Driven Forms</a>
    <a routerLink="/reactiveDrivenF">Reactive Driven Forms</a>
    <a routerLink="/categories">Categories</a>
  </div>

  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }

  public redirectLogin(): void {
    this.router.navigate(['login']);
  }

}
