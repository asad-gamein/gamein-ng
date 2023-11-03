import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  // isLoggedIn() {
  //   throw new Error('Method not implemented.');
  // }
  private apiUrl = 'https://gamein-lms-9ffbf98aa3d3.herokuapp.com/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Simulate local login with hard-coded values
  checkLocalUsernameAndPassword(email: string, password: string): boolean {
    if (email === 'admin@gmail.com' && password === '123456789') {
      localStorage.setItem('email', 'admin@gmail.com');
      return true;
    } else if (email === 'employee@gmail.com' && password === 'employee123') {
      localStorage.setItem('email', 'employee@gmail.com');
      return true;
    } else {
      return false;
    }
  }
  
  isUserAdmin(): boolean {
    const email = localStorage.getItem('email');
    return email === 'admin@gmail.com';
  }
  private userEmail: string | undefined;
  login(email: string) {
    this.userEmail = email;
  }

  // Make an HTTP request to log in
  loginUser(email: string, password: string): Observable<any> {
    const body = { email, password };
    console.log("req.body", body);
    return this.http.post(`${this.apiUrl}/login`, body);
  }
  checkLoginStatus() {
    return this.http.get<boolean>(this.apiUrl);
  }
  // 
}
