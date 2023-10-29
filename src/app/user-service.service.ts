// userService.service.ts
import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {
  private userKey = 'userData'; // Key for user data in localStorage

  setUser(user: { name: string, email: string, role: string }) {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser() {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : { name: '', email: '', role: '' };
  }
}
