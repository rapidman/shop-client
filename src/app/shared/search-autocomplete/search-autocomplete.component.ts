import {Component, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import {MatAutocompleteTrigger} from "@angular/material";
import {DetailService} from "../detail/detail.service";
import {Observable} from "rxjs/Observable";
import {map, startWith} from "rxjs/operators";

export class State {
  constructor(public name: string, public population: string, public flag: string) {
  }
}

/**
 * @title Autocomplete overview
 */
@Component({
  selector: 'app-search-autocomplete',
  templateUrl: 'search-autocomplete.component.html',
  styleUrls: ['search-autocomplete.component.css']
})
export class SearchAutocompleteComponent {
  stateCtrl: FormControl;
  goods: any;
  @ViewChild(MatAutocompleteTrigger) autocompleteTrigger: MatAutocompleteTrigger;

  constructor(private router: Router, private detailService: DetailService) {
    this.router = router;
    this.detailService = this.detailService;
    this.stateCtrl = new FormControl();
    this.stateCtrl.valueChanges
      .subscribe(name => {
        if(name.length < 2){
          return;
        }
        this.detailService.getAutoComplete(name)
          .subscribe(res => {
            console.log(res);
            return this.goods = res['_embedded']['goods'];
          })
      })
  }

  selectCategory(category: any) {
    // alert(category.option.value);
  }

  resetItem() {
    if (this.stateCtrl) {
      this.stateCtrl.setValue('');
      this.goods = null;
    }
  }

  search() {
    // this.closeAutocomplete();
    if (this.stateCtrl.value) {
      this.router.navigate(['/search-result', this.stateCtrl.value]);
    }
  }

  closeAutocomplete() {
    this.autocompleteTrigger.closePanel();
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
