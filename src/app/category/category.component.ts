import {Component, OnInit} from '@angular/core';
import {DetailService} from "../shared/service/detail/detail.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  sub: Subscription;
  tiles: any[];

  constructor(private route: ActivatedRoute, private detailService: DetailService) {
    this.detailService = this.detailService;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const query = params['id'];
      alert(query);
      if (query) {
        this.detailService.findGoodsByCategoryId(query).subscribe(data => {
          alert(JSON.stringify(data['content']));
          this.tiles = data['content'];
        });
      }
    });
  }

}
