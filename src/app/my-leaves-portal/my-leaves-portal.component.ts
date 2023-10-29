import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MyLeavesComponent } from '../my-leaves/my-leaves.component';

@Component({
  selector: 'app-my-leaves-portal',
  template: '<ng-container #portal></ng-container>',
  templateUrl: './my-leaves-portal.component.html',
  styleUrls: ['./my-leaves-portal.component.css']
})
export class MyLeavesPortalComponent {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(MyLeavesComponent);
    const componentRef = componentFactory.create(this.viewContainerRef.injector);
    this.viewContainerRef.insert(componentRef.hostView);
  }

}
