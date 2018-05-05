import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  isAllowed = true;
  result:any = 0;
  constructor() { }

  ngOnInit() {
  }

  calculate(){
    console.log("Clicked");
    this.result += 1;
  }
}
