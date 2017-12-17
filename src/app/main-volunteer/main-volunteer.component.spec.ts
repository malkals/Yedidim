import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVolunteerComponent } from './main-volunteer.component';

describe('MainVolunteerComponent', () => {
  let component: MainVolunteerComponent;
  let fixture: ComponentFixture<MainVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainVolunteerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
