// holiday-portal.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HolidayPortalService {
  showPortal: boolean = false;

  togglePortal() {
    this.showPortal = !this.showPortal;
  }
}
