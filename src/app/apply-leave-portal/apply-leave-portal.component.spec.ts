import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyLeavePortalComponent } from './apply-leave-portal.component';

describe('ApplyLeavePortalComponent', () => {
  let component: ApplyLeavePortalComponent;
  let fixture: ComponentFixture<ApplyLeavePortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyLeavePortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyLeavePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
