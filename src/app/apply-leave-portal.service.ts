import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplyLeavePortalService {

  showPortal: boolean = false;

  togglePortal() {
    this.showPortal = !this.showPortal;
  }
}
