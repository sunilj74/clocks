import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { ClockFaceComponent } from './clock-face.component';
import { ClockFaceAnalogComponent } from '../clock-face-analog/clock-face-analog.component';
import { ClockFaceDigitalComponent } from '../clock-face-digital/clock-face-digital.component';
import { MatButtonModule, MatIconModule } from '@angular/material';

describe('ClockFaceComponent', () => {
  let component: ClockFaceComponent;
  let fixture: ComponentFixture<ClockFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatIconModule

      ],
      declarations: [ 
        ClockFaceAnalogComponent,
        ClockFaceDigitalComponent,
        ClockFaceComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
