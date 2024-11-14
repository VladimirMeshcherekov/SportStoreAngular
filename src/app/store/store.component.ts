import {Component} from "@angular/core";
import {Product} from "../model/product.model";
import {ProductRepository} from "../model/product.repository";
import {Cart} from '../model/cart.model';
import {Router} from '@angular/router';

@Component({
  selector: "store",
  templateUrl: "store.component.html"
})
export class StoreComponent {
  public selectedCategory: string | undefined = undefined;
  public productsPerPage = 4;
  public selectedPage = 1;

  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage)
  }

  constructor(private repository: ProductRepository, private cart: Cart, private Router: Router) {
  }

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): (string | undefined)[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory: string | undefined): void {
    this.selectedCategory = newCategory;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(event: Event) {
    const selectElement = event.target as HTMLSelectElement;  // Явно указываем тип
    const pageSize = Number(selectElement.value);  // Преобразуем value в число
    this.productsPerPage = pageSize;

    /*
    this.productsPerPage = Number(newSize);
    this.changePage(1);*/
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.Router.navigateByUrl('/cart');
  }
}
