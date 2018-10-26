import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { DbService, Person } from './db.service';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { PersonComponent } from './person/person.component';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    PersonComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    DbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
