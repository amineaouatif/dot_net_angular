import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(username: string, password: string) {
    return this.http.post(`${environment.api}/users/authenticate`, {
      username,
      password,
    });
  }

  setAuthInLocalStorage(username: string, password: string): void {
    localStorage.setItem('auth', JSON.stringify({ username, password }));
  }

  getAuthFromLocalStorage() {
    const jsonString = localStorage.getItem('auth');
    return !!jsonString ? JSON.parse(jsonString) : null;
  }
}
