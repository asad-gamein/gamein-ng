import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLeavesPortalComponent } from './my-leaves-portal.component';

describe('MyLeavesPortalComponent', () => {
  let component: MyLeavesPortalComponent;
  let fixture: ComponentFixture<MyLeavesPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLeavesPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLeavesPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
