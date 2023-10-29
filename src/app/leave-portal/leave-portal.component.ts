import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { ViewLeaveComponent } from '../view-leave/view-leave.component';

@Component({
  selector: 'app-leave-portal',
  template: '<ng-container #portal></ng-container>',
})
export class LeavePortalComponent {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ViewLeaveComponent);
    const componentRef = componentFactory.create(this.viewContainerRef.injector);
    this.viewContainerRef.insert(componentRef.hostView);
  }
}

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-leave-portal',
//   templateUrl: './leave-portal.component.html',
//   styleUrls: ['./leave-portal.component.css']
// })
// export class LeavePortalComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
