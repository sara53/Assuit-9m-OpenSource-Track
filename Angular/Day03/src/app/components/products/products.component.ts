import { Component } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';

@Component({
  selector: 'app-products',
  imports: [ProductDetailsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  product: { id: number; name: string; price: number } = {
    id: 1,
    name: 'Book',
    price: 400,
  };

  getOffer() {
    this.product = { ...this.product, price: 200 };
  }
}
