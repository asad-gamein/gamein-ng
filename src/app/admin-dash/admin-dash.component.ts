import { Component, OnInit } from '@angular/core';
import { HolidayPortalService } from '../holidays-portal.service';
import { LeavePortalService } from '../leave-portal.service';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../api.service';
import { UserServiceService } from '../user-service.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  userName: string | undefined;
  displayedColumns: string[] = ['Employee-id', 'Fromdate', 'Todate', 'Reason', 'Status','Action'];
  dataSource! :MatTableDataSource<any>;
  constructor(public holidayPortalService: HolidayPortalService, public leavePortalService: LeavePortalService,private api:ApiService, public userService: UserServiceService, private authService: AuthService) { 
  const user = this.userService.getUser();
    if (user) {
      this.userName = user.name;
    }
  }
  toggleHolidaysPortal() {
    this.holidayPortalService.togglePortal();
  }

  displayleave(){
    this.api.viewleave().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
      }
    })
  }
  delete(id:number){
    this.api.delete(id).subscribe(res=>{
     alert("Leave canceled successfully!!!")
     this.displayleave();
    })
   }

  toggleLeavesPortal() {
    this.leavePortalService.togglePortal();
    this.displayleave();
  }
  isAdmin: boolean | undefined;

  ngOnInit() {
    // ngOnInit() {
      const user = this.userService.getUser();
      if (user) {
        this.isAdmin = user.role === 'admin';
      }
    // }
    
    this.isAdmin = this.authService.isUserAdmin();
  }


}
