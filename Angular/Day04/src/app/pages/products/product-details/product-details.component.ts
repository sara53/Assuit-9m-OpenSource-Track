import { Component, OnInit } from '@angular/core';
import { SharedCardComponent } from '../../../shared/shared-card/shared-card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StaticProductService } from '../../../services/static-product.service';
import { IProduct } from '../../../models/iproduct';

@Component({
  selector: 'app-product-details',
  imports: [SharedCardComponent, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  product?: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: StaticProductService
  ) {}
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.productService.getProductById(this.productId);
  }
}
