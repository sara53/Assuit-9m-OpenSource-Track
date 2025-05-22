import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromotionsService {
  ads: string[] = [
    'Buy One Get One',
    'Buy 3 Get Two',
    'Up to 30%',
    'Up To 50%',
  ];

  constructor() {}

  getCurrentAd(): Observable<string> {
    let observable = new Observable<string>((observer) => {
      let count = 0;

      let myInterval = setInterval(() => {
        observer.next(this.ads[count++]);
        if (this.ads.length == count) {
          observer.complete();
        }
        if (this.ads[count] == '') {
          observer.error('Empty Ad');
        }
      }, 3000);
      // End Of CB Function
      // unsunscible
      // 1-completed
      // 2-Error
      // 3-Call
      return {
        unsubscribe() {
          console.log('unsubscribe');
          clearInterval(myInterval);
        },
      };
    });

    return observable;
  }
}
