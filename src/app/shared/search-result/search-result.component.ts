import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {DetailService} from "../service/detail/detail.service";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  sub: Subscription;

  tiles: any[];

  constructor(private route: ActivatedRoute, private detailService: DetailService) {
    this.detailService = this.detailService;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const query = params['query'];
      if (query) {
        this.detailService.findGoodsByCategoryId(query, 0, 100).subscribe(data => {
          this.tiles = data['content'];
        });
      }
    });
  }

}
