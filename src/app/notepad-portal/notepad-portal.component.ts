import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { NotepadComponent } from '../notepad/notepad.component';
// import { MyLeavesComponent } from '../my-leaves/my-leaves.component';

@Component({
  selector: 'app-notepad-portal',
  template: '<ng-container #portal></ng-container>',
  templateUrl: './notepad-portal.component.html',
  styleUrls: ['./notepad-portal.component.css']
})
export class NotepadPortalComponent {

  list: any[] = [];

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngAfterViewInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NotepadComponent);
    const componentRef = componentFactory.create(this.viewContainerRef.injector);
    this.viewContainerRef.insert(componentRef.hostView);
  }

  ngOnInit(): void {
    const storedData = JSON.parse(localStorage.getItem('hello') || '[]');
    if (Array.isArray(storedData)) {
      this.list = storedData;
    } else {
      this.list = [];
    }
  }

  

  newNote(item:string)
  {
    
    this.list.push({name:item})
    localStorage.setItem('hello', JSON.stringify(this.list))

  }



  removenote(i:number){
    this.list.splice(i, 1);
    localStorage.setItem('hello', JSON.stringify(this.list))
    // this.list=this.list.filter(item=>item.id!==id);
  }

}

