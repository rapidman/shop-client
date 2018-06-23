import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DetailService {

  public API = '//localhost:8080/api/v1';
  public GOODS_API = this.API + '/goods';
  public CATEGORIES_API = this.API + '/categories';
  public SEARCH_CATEGORIES_API = this.API + '/categories/search';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.CATEGORIES_API);
  }

  get(id: string) {
    return this.http.get(this.CATEGORIES_API + '/' + id);
  }

  getAutoComplete(query: string) {
    return this.http.get(this.SEARCH_CATEGORIES_API + '/?query=' + query + "&page=0&size=100");
  }

  findGoodsByQuery(query: string): Observable<any> {
    return this.http.get(this.GOODS_API + '/search/findByCategoryNameIgnoreCaseContainingOrderByName?categoryName=' + query +
    "&page=0&size=100");
  }

  findGoodsByCategoryId(query: string): Observable<any> {
    return this.http.get(this.GOODS_API + '?categoryId=' + query + "&page=0&size=100");
  }

  findGoodsById(id: string): Observable<any> {
    return this.http.get(this.GOODS_API + '/' + id);
  }

}
