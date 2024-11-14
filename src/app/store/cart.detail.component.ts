import { Component } from "@angular/core";
import {Cart} from '../model/cart.model';
@Component({
  templateUrl: "cartDetail.component.html"

})
export class CartDetailComponent {
  constructor(public cart: Cart) {
  }

  validateInput(event: any) {
    var inputElement =(event.target as HTMLSelectElement)
    var quantity = Number(inputElement.value);
    if(quantity < 0){
      inputElement.value = "0";
    }

  }
}
