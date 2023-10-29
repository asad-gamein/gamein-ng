import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavePortalComponent } from './leave-portal.component';

describe('LeavePortalComponent', () => {
  let component: LeavePortalComponent;
  let fixture: ComponentFixture<LeavePortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavePortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
