import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StorageService {

  constructor(private _http: HttpClient) { }

  public savePeoples(peoples: Array<Object>) {
    localStorage.setItem('peoples', JSON.stringify(peoples));
  }


  public peopleDbInitialized() {
    return localStorage.getItem('peoples');
  }

  public getObject(name: string) {
    return JSON.parse(localStorage.getItem(name));
  }

  public savePoints(point: number) {
    let points = Number(localStorage.getItem('points'));
    points += point;
    localStorage.setItem('points', String(points));
  }

  public getPoints() {
    return localStorage.getItem('points');
  }

  public saveResult(data: Object) {
    const rank = JSON.parse(localStorage.getItem('rank')) || [];
    rank.push(data);

    localStorage.setItem('rank', JSON.stringify(rank));
  }

  public getRank() {
    let rank = JSON.parse(localStorage.getItem('rank'));

    rank = rank.sort(function(playerA, playerB) {
      return playerA.points > playerB.points ? -1 : playerA.points < playerB.points ? 1 : 0;
    });

    return rank;
  }

  public resertPoints() {
    localStorage.setItem('points', '0');
  }

  public initStorageMock() {
    this._http.get('./assets/mock.json').subscribe(response => {
      localStorage.setItem('peoples', JSON.stringify(response));
    });
  }
}
