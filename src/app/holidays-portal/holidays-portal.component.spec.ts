import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysPortalComponent } from './holidays-portal.component';

describe('HolidaysPortalComponent', () => {
  let component: HolidaysPortalComponent;
  let fixture: ComponentFixture<HolidaysPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidaysPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolidaysPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
