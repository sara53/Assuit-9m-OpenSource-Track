import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProductService {
  productList: IProduct[] = [];
  constructor() {
    this.productList = [
      {
        id: '1',
        name: 'Book',
        price: 200,
        quantity: 400,
      },
      {
        id: '2',
        name: 'Pen',
        price: 400,
        quantity: 30,
      },
      {
        id: '3',
        name: 'Watch',
        price: 600,
        quantity: 10,
      },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.productList;
  }

  getProductById(productId: string): IProduct | undefined {
    return this.productList.find((product) => product.id == productId);
  }

  addNewProduct(product: IProduct) {
    this.productList.push(product);
  }

  editProduct(productId: string, product: IProduct) {
    // logic Edit
  }

  deleteProduct(productId: string) {
    this.productList = this.productList.filter(
      (product) => product.id != productId
    );
    return this.productList;
  }
}
