import { Component, OnInit } from '@angular/core';
import { HolidayPortalService } from '../holidays-portal.service';
import { ApplyLeavePortalService } from '../apply-leave-portal.service';
import { UserServiceService } from '../user-service.service';
import { MyLeavesPortalService } from '../my-leaves-portal.service';
import { NotepadPortalService } from '../notepad-portal.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
  userName: string | undefined;

  constructor(public holidayPortalService: HolidayPortalService, public applyLeavePortalService: ApplyLeavePortalService,public myLeavesPortalService: MyLeavesPortalService,public myNotesPortalService: NotepadPortalService,public userService: UserServiceService) { 
    const user = this.userService.getUser();
    if (user) {
      this.userName = user.name;
    }
  }

  ngOnInit(): void {
  }

  toggleHolidaysPortal() {
    this.holidayPortalService.togglePortal();
  }

  toggleApplyLeavePortal() {
    this.applyLeavePortalService.togglePortal();
  }

  toggleMyLeavePortal(){
    this.myLeavesPortalService.togglePortal();
  }

  toggleMyNotesPortal(){
    this.myNotesPortalService.togglePortal();
  }

}
