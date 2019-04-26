import { Component } from '@angular/core';
import { StorageService } from '../shared/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.css']
})
export class RankComponent {

  constructor(
      private _storageService: StorageService,
      private _router: Router
  ) { }

  navigateToHome() {
    this._router.navigate(['/']);
  }

  getRank() {
    return this._storageService.getRank() || [];
  }
}
