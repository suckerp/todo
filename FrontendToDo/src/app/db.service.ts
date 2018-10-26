import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as rx from 'rxjs'
import * as op from 'rxjs/operators'

export type Person = {
  pid: number,
  firstName: string,
  lastName: string
}

export type Todo = {
  tid: number,
  text: string,
  status: boolean,
  fk_pid: number
}

export type getTable = {
  table: string,
  cols: string,
  wheres: string
}

export type insertIntoTable = {
  table: string,
  mask: string,
  values: string
}




@Injectable({
  providedIn: 'root'
})
export class DbService {

  personen: rx.BehaviorSubject<Person[]> = new rx.BehaviorSubject([])
  todolist: rx.BehaviorSubject<Todo[]> = new rx.BehaviorSubject([])

  constructor(public _http:HttpClient) { 
    this.getTable$({table: "person", cols: "*", wheres: ""}).subscribe(
      ((x:Person[])=>{
        this.personen.next(x)
      })
    )
    this.getTable$({table: "todolist", cols: "*", wheres: ""}).subscribe(
      ((x:Todo[])=>{
        this.todolist.next(x)
      })
    )
  }

  getTable$(getTable:getTable){
    return this._http.post("http://localhost:3000/select", getTable)
  }

  insertToDo$(insertIntoTable:insertIntoTable){
    return this._http.post("http://localhost:3000/insert", insertIntoTable)
  }

  deleteFromTodo$(deleteFromTodo:getTable){
    return this._http.post("http://localhost:3000/delete", deleteFromTodo)
  }

  insertTodo(text:string, pid:string){
    this.insertToDo$({
      table: "todolist",
      mask: "(text, status, pid)",
      values: `("${text}", 0, ${pid})`
    }).subscribe(
      x=>{
        this.getTable$({
          table: "todolist",
          cols: "*",
          wheres: ""
        }).subscribe(
          (y:Todo[]) => this.todolist.next(y)
        )
      }
    )
  }

  deleteFromTodo(todo:Todo){
    this.deleteFromTodo$({
      table: "todolist",
      cols: "",
      wheres: `tid=${todo.tid}`
    }).subscribe(
      x=>{
        this.getTable$({
          table: "todolist",
          cols: "*",
          wheres: ""
        }).subscribe(
          (y:Todo[]) => this.todolist.next(y)
        )
      }
    )
  }
  

/*
    personen: rx.Observable<any>
    todolist: rx.Observable<any>
  
    constructor(public _http:HttpClient) { 
      this.personen = this.getTable$({table: "person", cols: "*", wheres: ""})
  
      this.todolist = this.getTable$({table: "todolist", cols: "*", wheres: ""})
    }
      
    getTable$(getTable:getTable){
      return this._http.post("http://localhost:3000/select", getTable)
    }
  
    insertToDo$(insertIntoTable:insertIntoTable){
      return this._http.post("http://localhost:3000/insert", insertIntoTable)
    }
  
    deleteFromTodo$(deleteFromTodo:getTable){
      return this._http.post("http://localhost:3000/delete", deleteFromTodo)
    }
  
    insertTodo(text:string, pid:string){
      this.insertToDo$({
        table: "todolist",
        mask: "(text, status, pid)",
        values: `("${text}", 0, ${pid})`
      }).subscribe(
        x=>{
          this.todolist = this.getTable$({
            table: "todolist",
            cols: "*",
            wheres: ""
          })
        }
      )
    }
  
    deleteFromTodo(todo:Todo){
      this.deleteFromTodo$({
        table: "todolist",
        cols: "",
        wheres: `tid=${todo.tid}`
      }).subscribe(
        x=>{
          this.todolist = this.getTable$({
            table: "todolist",
            cols: "*",
            wheres: ""
          })
        }
      )
  */



/*
  funktionstest$():rx.Observable<Person>{
    return this._http.post<Person>("http://localhost:3000/test", {
      tid:1, 
      firstName: "ich", 
      lastName: "Auch"
    })
  }
*/
}
