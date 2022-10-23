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
              <h2>{{siteUrl}}</h2>
              <input type="text" value="angular" [id] = "myId">
              <input type="text" value="react" bind-disabled = "isDisabled">
              <h2 class="text-success">Test Class</h2>
              <h2 [class]="successClass">Test Class Binding </h2>
              <h2 [class.text-danger]="hasError">Test Class Binding </h2>
              <h2 [ngClass]="messageClasses">Test Class Binding </h2>
              <h2 [style.color]="'red'">Style Binding </h2>
              <h2 [style.color]="highlightColor">Style Binding </h2>
              <h2 [ngStyle]="titleStyles">Style Binding </h2>
              <button (click)="onClick()">Event </button>
              {{greeting}}`,
  styles: [`
    .text-success {
      color:green;
    }
    .text-danger {
      color:red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "aravind";
  public myId = "test";
  public isDisabled = true; //property to bind in html
  public siteUrl = window.location.href; //these kind of js methods can't be used in the template. we can use it like this way only
  public successClass = "text-success";
  public hasError = false; // the text-danger class will apply only if this hasError was true
  public isSpecial = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial,
  }
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic",
  };
  public greeting = "";
  // ng-class directive dynamically binds one or more CSS classes
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(){
    this.greeting = "vanakam";
  }
}
