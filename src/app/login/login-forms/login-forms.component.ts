import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from './models';

@Component({
  selector: 'app-login-forms',
  templateUrl: './login-forms.component.html',
  styleUrls: ['./login-forms.component.scss']
})
export class LoginFormsComponent {
  @ViewChild('form')
  public form!: NgForm;
  public credentials: Credentials = {} as Credentials;

  constructor(private router: Router) {}

  public onSubmit(): void {
    console.log('xD', this.form.controls);
    if (this.form.valid) {
      this.form.resetForm();
      this.router.navigate(['home']);
    }
  }

  public get loginError(): boolean {
    return !(this.form.controls['login']?.valid);
  }

  public get passwordError(): boolean {
    return !(this.form.controls['password']?.valid);
  }
}
