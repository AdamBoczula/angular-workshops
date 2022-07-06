import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CostFormContainerComponent } from './cost-form-container/cost-form-container.component';
import { CostReactiveFormComponent } from './cost-reactive-form/cost-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CostFormContainerComponent,
    CostReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
