import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>
              welcome {{name}}                 
              </h2>
              <h2>{{2+2}}</h2>
              <h2>{{"welcome " + name}}</h2>
              <h2>{{name.length}}</h2>
              <h2>{{name.toUpperCase()}}</h2>
              <h2>{{greetUser()}}</h2>
              <h2>{{siteUrl}}</h2>`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "aravind";
  public siteUrl = window.location.href; //these kind of js methods can't be used in the template. we can use it like this way only

  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
