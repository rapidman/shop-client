import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {DetailService} from "../../shared/service/detail/detail.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  sub: Subscription;
  tiles: any[];

  constructor(public route: ActivatedRoute, private detailService: DetailService) {
    this.detailService = this.detailService;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const query = params['id'];
      if (query) {
        this.detailService.findGoodsByCategoryId(query).subscribe(data => {
          this.tiles = data['content'];
        });
      }
    });
  }

}
