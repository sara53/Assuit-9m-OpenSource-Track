import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent
  implements OnInit, OnChanges, AfterViewInit, AfterContentInit, OnDestroy
{
  @ViewChild('myHeader') myElement!: ElementRef;
  constructor() {}

  previousPrice: any;
  date: Date = new Date();
  @Input() product!: { id: number; name: string; price: number };
  @Input() trackName: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
    if (!changes['product'].firstChange) {
      this.previousPrice = changes['product'].previousValue.price;
    }
  }
  ngOnInit(): void {
    console.log('Oninit');
  }
  ngAfterContentInit(): void {
    console.log('After Content init');
  }
  ngAfterViewInit(): void {
    console.log('View Init');
  }
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
}
