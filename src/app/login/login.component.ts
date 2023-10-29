import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterModule, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  msg: string = '';

  constructor(private authService: AuthService, private routes: Router, public userService: UserServiceService) {}

  ngOnInit(): void {}

  check(email: string, password: string) {
    this.authService.loginUser(email, password).subscribe(
      (response) => {
        console.log('Response received', response);
        if (response.success) {
          // Login successful
          console.log("response", response);
          console.log("response email", response.email);
          this.userService.setUser({ name: response.name, email: response.email, role: response.role });

          if (response.role === "admin") {
            this.routes.navigate(['/admin']);
          } else {
            this.routes.navigate(['/user']);
          }
        } else {
          // Login failed, display an error message
          this.msg = 'Invalid username or password';
        }
      },
      (error) => {
        // Handle HTTP error, e.g., server is not reachable
        console.error(error);
        this.msg = 'An error occurred while logging in';
      }
    );
  }
}
