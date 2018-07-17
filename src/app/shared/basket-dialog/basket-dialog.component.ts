import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {BasketService, Order} from "../service/basket/basket.service";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-basket-dialog',
  templateUrl: './basket-dialog.component.html',
  styleUrls: ['./basket-dialog.component.css']
})
export class BasketDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BasketDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private basketService: BasketService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getOrders(): Order[] {
    return this.basketService.getOrders();
  }

  ngOnInit() {
  }

  deleteProdict(item: Order) {
    this.basketService.delete(item.productId);
  }
}
