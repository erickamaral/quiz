import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleItemComponent } from './people-item/people-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PeopleItemDetailComponent } from './people-item-detail/people-item-detail.component';
import { PeopleItemDetailDialogComponent } from './people-item-detail-dialog/people-item-detail-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../shared/shared.module';

const modules = [
  CommonModule,
  MatPaginatorModule,
  BrowserAnimationsModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  FormsModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  NgxPaginationModule,
  SharedModule
];

const components = [
  QuizComponent,
  PeopleItemComponent,
  PeopleItemDetailComponent,
  PeopleItemDetailDialogComponent,
  PeopleItemDetailDialogComponent
];

@NgModule({
  imports: [...modules],
  declarations: [...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [PeopleItemDetailDialogComponent]
})
export class QuizModule { }
