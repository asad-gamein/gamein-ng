import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Retrieve the user information from local storage.
    const username = localStorage.getItem('username');
    const isAdmin = username === 'admin';

    return isAdmin;
  }
}
