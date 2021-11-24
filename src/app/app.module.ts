import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectExampleComponent } from './select-example/select-example.component';
import { AsyncValidatorExampleComponent } from './async-validator-example/async-validator-example.component';

@NgModule({
  declarations: [AppComponent, SelectExampleComponent, AsyncValidatorExampleComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
