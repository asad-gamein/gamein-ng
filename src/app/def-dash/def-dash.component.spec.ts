import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefDashComponent } from './def-dash.component';

describe('DefDashComponent', () => {
  let component: DefDashComponent;
  let fixture: ComponentFixture<DefDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
