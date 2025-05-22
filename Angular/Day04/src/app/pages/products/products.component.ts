import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductHeaderComponent } from '../../components/product-header/product-header.component';
import { SharedCardComponent } from '../../shared/shared-card/shared-card.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { StaticProductService } from '../../services/static-product.service';
import { IProduct } from '../../models/iproduct';
import { RouterLink } from '@angular/router';
import { DynamicProductService } from '../../services/dynamic-product.service';
import { Subscribable, Subscription } from 'rxjs';

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
export class ProductsComponent implements OnInit, OnDestroy {
  products!: IProduct[];
  mySub1!: Subscription[];
  constructor(private productService: DynamicProductService) {}

  ngOnInit(): void {
    let x = this.productService.getAllProducts().subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.mySub1.push(x);
  }

  deleteHandler(productId: string) {
    this.productService.deleteProduct(productId).subscribe({
      next: (response) => {
        this.products = this.products.filter(
          (product) => product.id != productId
        );
      },
    });
  }
  ngOnDestroy(): void {
    this.mySub1[0].unsubscribe();
  }
}
