import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  username: string;
  password: string;

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    if (!!this.username && !!this.password) {
      this.auth.login(this.username, this.password).subscribe(
        (resp) => {
          this.auth.setAuthInLocalStorage(this.username, this.password);
          this.userService.setUserInLocalStorage(resp);
          this.router.navigateByUrl('/home');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
