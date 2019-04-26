import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-people-item-detail-dialog',
  templateUrl: './people-item-detail-dialog.component.html',
  styleUrls: ['./people-item-detail-dialog.component.css']
})
export class PeopleItemDetailDialogComponent {
  constructor(
      public dialogRef: MatDialogRef<PeopleItemDetailDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data) {}

  public close() {
    this.dialogRef.close();
  }
}
