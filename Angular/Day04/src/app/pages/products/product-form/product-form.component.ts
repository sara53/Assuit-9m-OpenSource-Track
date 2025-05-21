import { Component } from '@angular/core';
import { SharedCardComponent } from '../../../shared/shared-card/shared-card.component';
import { Router } from '@angular/router';
import { StaticProductService } from '../../../services/static-product.service';

@Component({
  selector: 'app-product-form',
  imports: [SharedCardComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  constructor(
    private router: Router,
    private productService: StaticProductService
  ) {}
  productHandler(e: Event) {
    e.preventDefault();
    this.productService.addNewProduct({
      id: ' 6',
      name: 'New Product',
      price: 300,
      quantity: 10,
    });
    this.router.navigate(['/products']);
  }
}
