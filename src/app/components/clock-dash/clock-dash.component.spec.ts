import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDashComponent } from './clock-dash.component';
import { ClockFaceComponent } from '../clock-face/clock-face.component';
import { ClockSetupComponent } from '../clock-setup/clock-setup.component';

describe('ClockDashComponent', () => {
  let component: ClockDashComponent;
  let fixture: ComponentFixture<ClockDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ClockDashComponent, 
        ClockFaceComponent,
        ClockSetupComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
