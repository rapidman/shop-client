import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../animations";

@Component({
  moduleId: module.id.toString(),
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': ''}
  })
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
