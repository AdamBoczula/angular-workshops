import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-wrapper',
  template: `
    <header>HEADER</header>
    <router-outlet></router-outlet>
    <footer>FOOTER</footer>
  `,
  styleUrls: ['./page-wrapper.component.scss']
})
export class PageWrapperComponent {


}
