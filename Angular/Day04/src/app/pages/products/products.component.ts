import { Component, OnInit } from '@angular/core';
import { ProductHeaderComponent } from '../../components/product-header/product-header.component';
import { SharedCardComponent } from '../../shared/shared-card/shared-card.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { StaticProductService } from '../../services/static-product.service';
import { IProduct } from '../../models/iproduct';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    CurrencyPipe,
    ProductHeaderComponent,
    SharedCardComponent,
    RouterLink,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products!: IProduct[];
  constructor(private productService: StaticProductService) {}
  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
    console.log(this.products);
  }

  deleteHandler(productId: string) {
    this.products = this.productService.deleteProduct(productId);
  }
}
