import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from './services/storage.service';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './services/image-service';
import { TimerComponent } from './components/timer/timer.component';
import { FinishDialogComponent } from './components/finish-dialog/finish-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

const modules = [
  CommonModule,
  HttpClientModule,
  FormsModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule
];

const services = [StorageService, ApiService, ImageService];

@NgModule({
  imports: [...modules],
  providers: [...services],
  exports: [
    TimerComponent
  ],
  entryComponents: [FinishDialogComponent],
  declarations: [TimerComponent, FinishDialogComponent]
})

export class SharedModule { }
