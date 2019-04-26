import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FinishForm } from './finish-form';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-dialog',
  templateUrl: './finish-dialog.component.html',
  styleUrls: ['./finish-dialog.component.css']
})
export class FinishDialogComponent {

  finishForm = new FinishForm();

  constructor(
      public dialogRef: MatDialogRef<FinishDialogComponent>,
      private _storageService: StorageService,
      private _router: Router,
      @Inject(MAT_DIALOG_DATA) public data) {
      dialogRef.disableClose = true;
  }


  finish() {
    if (this.finishForm.isValid()) {
      this._storageService.saveResult(this.finishForm.getData());
      this._storageService.resertPoints();
      this.dialogRef.close();
      this._router.navigate(['/']);

    }
  }

  points() {
    return this._storageService.getPoints();
  }
}
