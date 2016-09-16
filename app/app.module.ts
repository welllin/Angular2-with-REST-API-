import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { app_routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, app_routing ],
  declarations: [ AppComponent, CustomersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }