import { Component, OnInit } from '@angular/core';

// import fade in animation
import { fadeInAnimation } from '../animations';
@Component({
  moduleId: module.id.toString(),
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],

  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
