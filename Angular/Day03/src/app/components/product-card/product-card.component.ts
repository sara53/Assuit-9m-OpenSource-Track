import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  count: number = 0;

  @Input() ourOrgName!: string;
  @Output() onAddNewProduct = new EventEmitter<number>();
  addNewProduct() {
    this.count += 1;
    this.onAddNewProduct.emit(this.count);
  }
}
