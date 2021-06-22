import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  credentials: FormGroup;
  

  get username() {
    return this.credentials.get('username');
  }
  get lastname() {
    return this.credentials.get('lastname');
  }
  get firstname() {
    return this.credentials.get('firstname');
  }
  constructor(
    private fb: FormBuilder,
  ) {
    
   }

  ngOnInit(): void {
    this.credentials = this.fb.group({ 
      username: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
    });
  }
  onSubmit(){
    console.log(this.credentials.value);
  }

}
