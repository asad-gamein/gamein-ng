import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadPortalComponent } from './notepad-portal.component';

describe('NotepadPortalComponent', () => {
  let component: NotepadPortalComponent;
  let fixture: ComponentFixture<NotepadPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotepadPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotepadPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
