import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  setUserInLocalStorage(data): void {
    localStorage.setItem('user', JSON.stringify(data));
  }

  getUserFromLocalStorage() {
    const jsonString = localStorage.getItem('user');
    return !!jsonString ? JSON.parse(jsonString) : null;
  }
}
