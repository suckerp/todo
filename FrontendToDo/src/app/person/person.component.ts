import { Component, OnInit, Input } from '@angular/core';
import { Person, DbService } from '../db.service'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person:Person

  constructor(public db:DbService) { }

  ngOnInit() {
  }

}
