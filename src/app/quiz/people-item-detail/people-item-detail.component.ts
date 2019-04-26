import {Component, Input, OnInit} from '@angular/core';
import {People} from '../../model/people';

@Component({
  selector: 'app-people-item-detail',
  templateUrl: './people-item-detail.component.html',
  styleUrls: ['./people-item-detail.component.css']
})
export class PeopleItemDetailComponent implements OnInit {

  @Input() public people: People;
  constructor() { }

  ngOnInit() {
  }

}
