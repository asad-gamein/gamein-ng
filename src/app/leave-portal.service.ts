import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeavePortalService {
  showPortal: boolean = false;

  togglePortal() {
    this.showPortal = !this.showPortal;
  }
}
