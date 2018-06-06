import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class CatalogService {
  public API = '//localhost:8080';
  public CATEGORIES_API = this.API + '/categories';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.CATEGORIES_API);
  }
}
