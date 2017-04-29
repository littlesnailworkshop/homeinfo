import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' //ng-model is here

import { AppComponent }  from './app.component';
import { GreetingComponent }  from './greeting.component';
import {ProductListComponent} from './product-list.component';
import {ProductService} from './product.service';
import {ProductEditorComponent} from './product-editor.component';
import {HttpModule} from '@angular/http'
import {routing} from './app.routes'

@NgModule({
  imports:      [ BrowserModule,FormsModule ,HttpModule,routing],
  declarations: [ AppComponent, GreetingComponent, ProductListComponent,ProductEditorComponent],
  bootstrap:    [ AppComponent ],
  providers:[ProductService]//singleton cache on the top
})
export class AppModule { }
