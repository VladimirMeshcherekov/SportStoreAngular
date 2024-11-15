import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from "./store/store.module";
import {RouterModule} from '@angular/router';
import {StoreComponent} from './store/store.component';
import {CartDetailComponent} from './store/cart.detail.component';
import {CheckoutComponent} from './store/checkout.component';
import {StoreFirstGuard} from './storeFirst.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule, RouterModule.forRoot([
        {path: 'store', component: StoreComponent, canActivate: [StoreFirstGuard]},
        {path: 'cart', component: CartDetailComponent, canActivate: [StoreFirstGuard]},
        {path: 'checkout', component: CheckoutComponent, canActivate: [StoreFirstGuard]},
        {path: '**', redirectTo: '/store'}
      ])
    ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
