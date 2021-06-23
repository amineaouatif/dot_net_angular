import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserService } from './user.service';
import { User } from '../dto/user.dto';

interface AuthData {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject<boolean>(false);
  userRole$ = new BehaviorSubject<string>('');
  isAuthenticated: boolean;
  authInfo: any;

  constructor(private http: HttpClient, private userService: UserService) {
    this.getAuthFromLocalStorage();
    this.isAuthenticated$.subscribe((val: boolean) => {
      this.isAuthenticated = val;
    });
    this.authInfo = this.getAuthFromLocalStorage();
  }
  currentUserRole: string;
  login(username: string, password: string) {
    return this.http
      .post<User>(`${environment.api}/users/authenticate`, {
        username,
        password,
      })
      .pipe(
        map((resp) => {
          this.isAuthenticated$.next(true);
          console.log(resp.role);
          this.userRole$.next(resp.role);
          this.setAuthInLocalStorage(username, password, resp.role);
          this.userService.setUserInLocalStorage(resp);
        })
      );
  }

  setAuthInLocalStorage(
    username: string,
    password: string,
    role: string
  ): void {
    localStorage.setItem('auth', JSON.stringify({ username, password, role }));
  }

  getAuthFromLocalStorage(): AuthData {
    const jsonString = localStorage.getItem('auth');
    if (!!jsonString) {
      const authInfo = JSON.parse(jsonString);
      this.isAuthenticated$.next(true);
      this.userRole$.next(authInfo.role);
      return authInfo;
    }
    this.isAuthenticated$.next(false);
    this.userRole$.next('');
    return null;
  }

  getAuthorizationHeader(): string {
    return this.authInfo
      ? btoa(this.authInfo.username + ':' + this.authInfo.password)
      : null;
  }

  logout() {
    this.isAuthenticated$.next(false);
    this.userRole$.next('');
    localStorage.setItem('auth', '');
  }
}
