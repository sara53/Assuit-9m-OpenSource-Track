import { Component, OnDestroy, OnInit } from '@angular/core';
import { PromotionsService } from '../../services/promotions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  currentOffer!: string;

  mySubscribe!: Subscription;
  constructor(private promotionService: PromotionsService) {}

  ngOnInit(): void {
    this.mySubscribe = this.promotionService.getCurrentAd().subscribe({
      next: (response) => {
        this.currentOffer = response;
        console.log(response);
      },
      complete: () => {},
      error: (error) => {
        console.log(error);
      },
    });
  }
  ngOnDestroy(): void {
    this.mySubscribe.unsubscribe(); //
  }
}
