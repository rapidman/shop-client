import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {DetailService} from "../detail/detail.service";

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
        this.detailService.findGoodsByQuery(query).subscribe(data => {
          alert(JSON.stringify(data['_embedded']['goods']));
          this.tiles = data['_embedded']['goods'];
          // for (const car of this.cars) {
          //   this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
          // }
        });

      }
    });
  }

}
