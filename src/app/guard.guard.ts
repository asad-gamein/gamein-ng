import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GuardGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    return this.authService.checkLoginStatus().pipe(
      map((loggedIn: boolean) => {
        if (loggedIn) {
          return true; // User is authenticated, allow access
        } else {
          this.router.navigate(['login']); // User is not authenticated, redirect to the login page
          return false;
        }
      })
    );
  }
}



// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class GuardGuard implements CanActivate {
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     // Your guard logic here
//     return true; // Return true to allow access or implement your custom logic
//   }
// }
