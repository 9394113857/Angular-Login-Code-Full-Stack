import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public rtr : Router) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // custom code:-
  }

  LogoutUser(){
    localStorage.clear();
    this.rtr.navigate(["login"]);
  }

}
