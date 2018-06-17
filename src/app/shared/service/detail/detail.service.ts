import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DetailService {

  public API = '//localhost:8080/api/v1';
  public GOODS_API = this.API + '/goods';
  public CATEGORIES_API = this.API + '/categories';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.CATEGORIES_API);
  }

  get(id: string) {
    return this.http.get(this.CATEGORIES_API + '/' + id);
  }

  getAutoComplete(name: string) {
    return this.http.get(this.CATEGORIES_API + '/search/findByNameIgnoreCaseContainingOrderByName?name=' + name +
      "&page=0&size=100");
  }

  findGoodsByQuery(query: string): Observable<any> {
    // return "[ {id: 1, text: 'One', cols: 1, rows: 1, color: 'lightblue'}, " +
    //   "{id: 2, text: 'Two', cols: 1, rows: 1, color: 'lightgreen'}," +
    //   "{id: 3, text: 'Three', cols: 1, rows: 1, color: 'lightpink'}, " +
    //   "{id: 4, text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},]";
    return this.http.get(this.GOODS_API + '/search/findByCategoryNameIgnoreCaseContainingOrderByName?categoryName=' + query +
    "&page=0&size=100");
  }

}
