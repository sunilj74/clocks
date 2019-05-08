import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockFaceDigitalComponent } from './clock-face-digital.component';

describe('ClockFaceDigitalComponent', () => {
  let component: ClockFaceDigitalComponent;
  let fixture: ComponentFixture<ClockFaceDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockFaceDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockFaceDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
