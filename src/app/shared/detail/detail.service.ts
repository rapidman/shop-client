import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DetailService {

  public API = '//localhost:8080';
  public GOODS_API = this.API + '/goods';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.GOODS_API);
  }

  get(id: string) {
    return this.http.get(this.GOODS_API + '/' + id);
  }

  getAutoComplete(name: string) {
    return this.http.get(this.GOODS_API + '/search/findByNameIgnoreCaseContainingOrderByName?name=' + name +
      "&page=0&size=100");
  }

}
