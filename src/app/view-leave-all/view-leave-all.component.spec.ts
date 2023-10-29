import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeaveAllComponent } from './view-leave-all.component';

describe('ViewLeaveAllComponent', () => {
  let component: ViewLeaveAllComponent;
  let fixture: ComponentFixture<ViewLeaveAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeaveAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLeaveAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
