import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = [
    {name: "Mr.A",code: "1001",status: "single"},
    {name: "Mr.B",code: "1002",status: "married"},
    {name: "Mr.C",code: "1003",status: "married"},
  ]
  constructor() { }

  ngOnInit() {
  }

}
