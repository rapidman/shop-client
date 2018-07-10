import {Component, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Router} from "@angular/router";
import {MatAutocompleteTrigger} from "@angular/material";
import {DetailService} from "../service/detail/detail.service";
import {FormBuilder, FormGroup} from '@angular/forms';

export class Group {
  type: string;
  options: Option[];
}

export class Option {
  type: string;
  name: string;
  productId: number;
  categoryId: number;
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
  groupList: Group[];
  @ViewChild(MatAutocompleteTrigger) autocompleteTrigger: MatAutocompleteTrigger;
  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });

  constructor(private router: Router,
              private readonly detailService: DetailService,
              private fb: FormBuilder) {
    this.router = router;
    this.detailService = this.detailService;
    this.stateCtrl = new FormControl();
    this.stateCtrl.valueChanges
      .subscribe(query => {
        if (query.length < 2) {
          return;
        }
        this.detailService.getAutoComplete(query)
          .subscribe(res => {
            // alert(res['content']);
            return this.groupList = res['content'];
          })
      })
  }

  selectOption(event: any) {
    var option: Option = event.option.value;
    if(option.type === 'CATEGORY'){
      this.router.navigate(['/category', option.categoryId]);
    }else{
      this.router.navigate(['/category/' + option.categoryId + '/detail', option.productId]);
    }
    this.resetItem();
  }

  resetItem() {
    if (this.stateCtrl) {
      this.stateCtrl.setValue('');
      this.groupList = null;
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

