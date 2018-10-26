import { Component, OnInit } from '@angular/core';
import { Person, DbService, Todo } from '../db.service'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(public db:DbService) { }

  ngOnInit() {
  }

  insertTodo(text:string, pid:string){
    this.db.insertTodo(text, pid)
  }

  deleteTodo(todo:Todo) {
    this.db.deleteFromTodo(todo)
  }
}
