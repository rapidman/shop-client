import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import {DetailService} from "../shared/service/detail/detail.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  detail: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private detailService: DetailService) {
  }

  ngOnInit() {
    alert('DetailComponent');
    this.sub = this.route.params.subscribe(params => {
      const id = params['productId'];
      if (id) {
        this.detailService.findGoodsById(id).subscribe(data => {
          this.detail = data;
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/car-list']);
  }

  save(form: NgForm) {
    // this.carService.save(form).subscribe(result => {
    //   this.gotoList();
    // }, error => console.error(error));
  }

  remove(href) {
    // this.carService.remove(href).subscribe(result => {
    //   this.gotoList();
    // }, error => console.error(error));
  }

}
