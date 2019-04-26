import { Component, OnInit } from '@angular/core';
import { People } from '../model/people';
import { StorageService } from '../shared/services/storage.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public paginaAtual = 1;
  public peoples: Array<People> = [];

  constructor(private _storageService: StorageService) { }


  ngOnInit() {
    this.peoples = this._storageService.getObject('peoples');
  }
}
