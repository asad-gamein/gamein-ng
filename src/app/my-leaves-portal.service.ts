import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLeavesPortalService {

  showPortal: boolean = false;

  togglePortal() {
    this.showPortal = !this.showPortal;
  }
}

