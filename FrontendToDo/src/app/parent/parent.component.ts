import { Component, OnInit } from '@angular/core';
import { Person, DbService } from '../db.service'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor(public db:DbService) { }

  ngOnInit() {
  }

}
