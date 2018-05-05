import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  sub: Subscription;

  tiles: any[] = [
    {id: 1, text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {id: 2, text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {id: 3, text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {id: 4, text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const query = params['query'];
      if (query) {
        // alert(query);
      }
    });
  }

}
