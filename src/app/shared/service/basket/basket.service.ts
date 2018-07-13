import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as _ from 'lodash';

export interface Basket {
  orders: Order[];
}

export interface Order {
  productId: number;
  count: number
}


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  public API = '//localhost:8080/api/v1';
  public BASKET_API = this.API + '/basket';

  private basket: Basket;

  constructor(private http: HttpClient) {
    this.basket = {orders: []};
    this.refreshBasket();
  }

  addToBasket(productId: any) {
    this.http.put(this.BASKET_API, {"productId": productId, "count": 1},
      {withCredentials: true})
      .subscribe(data => {
        this.refreshBasket();
      });
  }

  refreshBasket() {
    return this.http.get<Basket>(this.BASKET_API, {withCredentials: true}).subscribe(data => {
      this.basket.orders = _.values(data['orders']);
    });
  }

  getCount(productId: number): number {
    for (const order of this.basket.orders) {
      if (order.productId === productId) {
        return order.count;
      }
    }
    return 0;
  }

  getTotalOrderCount(): number {
    if (this.basket.orders) {
      return this.basket.orders.length;
    }

    return 0;
  }

}
