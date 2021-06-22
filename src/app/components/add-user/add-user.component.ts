import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  username: string;
  firstname: string;
  lastname: string;
  role: string;


  constructor() { }

  ngOnInit(): void {
  }

}
