import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotepadPortalService {

  showPortal: boolean = false;

  togglePortal() {
    this.showPortal = !this.showPortal;
  }
}

