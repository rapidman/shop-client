import {Component, OnInit} from '@angular/core';
import {CatalogService} from "../service/catalog/catalog.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  items: any[] = [
    { title: 'Item 1', link: 'http://localhost' },
    { title: 'Item 2', link: 'http://localhost' },
    { title: 'Item 3', link: 'http://localhost' }
  ];

  constructor(private catalogService: CatalogService) {
    this.catalogService = this.catalogService;
  }

  ngOnInit() {
  }

}
