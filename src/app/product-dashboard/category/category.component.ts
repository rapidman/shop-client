import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {DetailService} from "../../shared/service/detail/detail.service";
import {PageEvent} from "@angular/material";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  sub: Subscription;
  tiles: any[];
  length = 0;
  pageSize = 5;
  pageIndex = 0;
  // MatPaginator Output
  pageEvent: PageEvent;
  categoryId: string;


  constructor(public route: ActivatedRoute, private readonly detailService: DetailService) {
    this.detailService = this.detailService;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.categoryId = params['id'];
      if (this.categoryId) {
        this.detailService.findGoodsByCategoryId(this.categoryId, this.pageIndex, this.pageSize).subscribe(data => {
          this.tiles = data['content'];
          this.pageIndex = data['number'];
          this.pageSize = data['size'];
          this.length = data['totalElements'];
        });
      }
    });
  }


  getServerData($event: PageEvent) {
    this.detailService.findGoodsByCategoryId(this.categoryId, $event.pageIndex, $event.pageSize).subscribe(data => {
      this.tiles = data['content'];
      this.pageIndex = data['number'];
      this.pageSize = data['size'];
      this.length = data['totalElements'];
    });
    return event;
  }
}
