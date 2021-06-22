import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  setUserInLocalStorage(data): void {
    localStorage.setItem('user', JSON.stringify(data));
  }

  getUserFromLocalStorage() {
    const jsonString = localStorage.getItem('user');
    return !!jsonString ? JSON.parse(jsonString) : null;
  }
}
