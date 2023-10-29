// holidays-portal.component.ts
import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HolidaysComponent } from '../holidays/holidays.component';

@Component({
  selector: 'app-holidays-portal',
  template: '<ng-container #portal></ng-container>',
})
export class HolidaysPortalComponent {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HolidaysComponent);
    const componentRef = componentFactory.create(this.viewContainerRef.injector);
    this.viewContainerRef.insert(componentRef.hostView);
  }
}
