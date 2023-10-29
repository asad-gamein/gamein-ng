import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ApplyLeaveComponent } from '../apply-leave/apply-leave.component';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { leavemodel } from '../leavemodel';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-apply-leave-portal',
  template: '<ng-container #portal></ng-container>',
  templateUrl: './apply-leave-portal.component.html',
  styleUrls: ['./apply-leave-portal.component.css']
})
export class ApplyLeavePortalComponent {
  public leave:leavemodel = {} as leavemodel;
  userName: any;
  selectedLeaveType: string | undefined; 


  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef,
    private api:ApiService,private route:Router,
    public userService: UserServiceService
  ) {
    const user = this.userService.getUser();
  if (user) {
    this.userName = user.name;
    this.leave.eid = user.name; // Set the employee name in the 'leave' object
  }
  }

  ngAfterViewInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ApplyLeaveComponent);
    const componentRef = componentFactory.create(this.viewContainerRef.injector);
    this.viewContainerRef.insert(componentRef.hostView);
  }
  apply() {
    if (!this.selectedLeaveType) {
      alert("Please select a leave type.");
      return;
    }
  
    // Set the leave type in the 'leave' object
    this.leave.leaveType = this.selectedLeaveType;
  
    this.api.applyleave(this.leave).subscribe((res) => {
      alert("Leave applied successfully!!!");
      this.route.navigate(['/user']);
    });
  }
  

  selectLeaveType(leaveType: string) {
    this.selectedLeaveType = leaveType;
  }
  
}
