import { Component, Input, OnInit } from '@angular/core';
import { People } from '../../model/people';
import { MatDialog } from '@angular/material';
import { PeopleItemDetailDialogComponent } from '../people-item-detail-dialog/people-item-detail-dialog.component';
import { AnswerForm } from '../forms/answer-form';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})
export class PeopleItemComponent {

  @Input() public people: People;
  answerForm = new AnswerForm();
  answer: string;
  showFormAnswer = false;
  detail = false;

  constructor(
      public dialog: MatDialog,
      private _storageService: StorageService
  ) {}

  openDialog() {
    this.detail = true;
    this.dialog.open(PeopleItemDetailDialogComponent, {
      width: '580px',
      data: this.people
    });
  }

  reply() {
    this.showFormAnswer = true;
  }

  processAnswer() {
    if (!this.answerForm.isValid()) {
      return;
    }

    this.showFormAnswer = false;
    this.answer = this.answerForm.get('answer').value.replace( /\s/g, '' ).toLowerCase();
    const name = this.people.name.replace( /\s/g, '' ).toLowerCase();

    if (this.answer === name) {
      const points = this.detail ? 5 : 10;
      this._storageService.savePoints(points);
    }
  }

}
