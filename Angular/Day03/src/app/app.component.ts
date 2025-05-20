import { Component } from '@angular/core';
import { ContentComponent } from './components/content/content.component';
import { StudentsComponent } from './components/students/students.component';
import { LoginComponent } from './components/login/login.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedCardComponent } from '../shared/shared-card.component';

@Component({
  selector: 'app-root',
  imports: [
    ContentComponent,
    StudentsComponent,
    LoginComponent,
    ProductCardComponent,
    ProductsComponent,
    SharedCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  trackName: string = 'Open Source';
  supName: string = 'Ahmed Ali';
  count: number = 0;

  orgName: string = '';

  getData(value: string) {
    this.orgName = value;
  }
  getProductCount(value: number) {
    this.count = value;
  }
}
