import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DetailService {

  public API = '//localhost:8080/api/v1';
  public GOODS_API = this.API + '/goods';
  public CATEGORIES_API = this.API + '/categories';
  public SEARCH_AUTOCOMPLETE_API = this.API + '/search/autocomplete';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.CATEGORIES_API);
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.GOODS_API + '/' + id);
  }

  getAutoComplete(query: string, page: number, size: number) {
    return this.http.get(this.SEARCH_AUTOCOMPLETE_API + '/?query=' + query + "&page=" + page + "&size=" + size);
  }

  findGoodsByQuery(query: string): Observable<any> {
    return this.http.get(this.GOODS_API + '/search/findByCategoryNameIgnoreCaseContainingOrderByName?categoryName=' + query +
    "&page=0&size=100");
  }

  findGoodsByCategoryId(query: string, page: number, size: number): Observable<any> {
    return this.http.get(this.GOODS_API + '?categoryId=' + query + "&page=" + page + "&size=" + size);
  }

  findGoodsById(id: string): Observable<any> {
    return this.http.get(this.GOODS_API + '/' + id);
  }

}
