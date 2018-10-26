import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo2';


/*
  test:Person = {
    pid: 0,
    firstName: "nö",
    lastName: "nö"
  }


  constructor(db:DbService){
    db.funktionstest$().subscribe(
     (x:Person)=>{
      console.log(x) 
      this.test=x}
    )
  }*/
}
