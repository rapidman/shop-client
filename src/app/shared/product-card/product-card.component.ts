import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  inBasket: boolean;

  constructor() {
  }

  ngOnInit() {
    this.inBasket = false;
  }

  addToBasket() {
    this.inBasket = true;
  }
}
