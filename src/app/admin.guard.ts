import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    const name = localStorage.getItem('name'); // Retrieve email from local storage
    if (name === 'admin@gmail.com') {
      return true; // Allow access to the /admin route
    } else {
      return this.router.parseUrl('/'); // Redirect to another route (e.g., home) or display an error page
    }
  }
}
