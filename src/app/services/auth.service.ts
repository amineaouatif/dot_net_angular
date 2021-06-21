import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from './user.service';

interface AuthData {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private userService: UserService) {
    this.getAuthFromLocalStorage();
  }

  login(username: string, password: string) {
    return this.http
      .post(`${environment.api}/users/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((resp) => {
          this.isAuthenticated.next(true);
          this.setAuthInLocalStorage(username, password);
          this.userService.setUserInLocalStorage(resp);
        })
      );
  }

  setAuthInLocalStorage(username: string, password: string): void {
    localStorage.setItem('auth', JSON.stringify({ username, password }));
  }

  getAuthFromLocalStorage(): AuthData {
    const jsonString = localStorage.getItem('auth');
    if (!!jsonString) {
      this.isAuthenticated.next(true);
      return JSON.parse(jsonString);
    }
    this.isAuthenticated.next(false);
    return null;
  }

  getAuthorizationHeader(): string {
    const authInfo = this.getAuthFromLocalStorage();
    return authInfo ? btoa(authInfo.username + ':' + authInfo.password) : null;
  }
}
