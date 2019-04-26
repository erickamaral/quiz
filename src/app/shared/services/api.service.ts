import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private _http: HttpClient) { }

  /**
   * @returns {Observable<Object>}
   */
  public getPeoples(url?: string) {
    return this._http.get(url || 'https://swapi.co/api/people/');
  }

  /**
   * @returns {Observable<Object>}
   */
  public getRequest(url: string) {
    return this._http.get(url);
  }
}
