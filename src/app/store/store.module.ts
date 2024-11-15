import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";

import {CartSummaryComponent} from './cartSummary.component';
import {CartDetailComponent} from './cart.detail.component';
import {CheckoutComponent} from './checkout.component';
import {RouterLink} from '@angular/router';
import {CounterDirective} from './counter.directive';

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterLink],
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule { }
