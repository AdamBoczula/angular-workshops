import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  template: `
    <span class="error">{{ msg }}</span>
  `,
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent {
  @Input()
  public msg: string = ''

}
