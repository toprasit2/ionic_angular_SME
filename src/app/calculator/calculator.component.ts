import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  isAllowed:boolean = true;
  counter:number = 0;
  result:string = ""+this.counter;
  num1:number = 0;
  num2:number = 0;
  constructor() { }

  ngOnInit() {
  }

  calculate(){
    this.result = ( this.num1 + this.num2 ) + "";
  }

  reset(){
    this.counter = 0;
    this.isAllowed = true;
    this.result = this.counter+""
  }

  log_num1(){
    console.log("num1 is "+this.num1)
  }

  log_num2(){
    console.log("num2 is "+this.num2)
  }
}
