import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private count: number;

  constructor() {
    this.count = 0;
  }

  addToBasket(productId: any) {
    this.count++;
  }

  getCount(): number {
    return this.count;
  }

}
