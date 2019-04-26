import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FinishDialogComponent } from '../finish-dialog/finish-dialog.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  minutes = 2;
  seconds = 0;
  isPaused: boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    setInterval(() => this.tick(), 1000);
  }

  private tick(): void {

    if (!this.isPaused) {

      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.isPaused = true;
          this.openDialog();
        }
      }
    }
  }

  openDialog() {
    this.dialog.open(FinishDialogComponent, {
      width: '480px',
    });
  }
}
