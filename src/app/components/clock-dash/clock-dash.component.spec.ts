import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksMaterialModule } from "../../clocksmaterial.module";
import { StoreModule } from "@ngrx/store";
import { configReducers } from "../../store/reducers/config.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ClockEffects } from "../../store/effects/clock.effects";

import { ClockDashComponent } from './clock-dash.component';
import { ClockFaceComponent } from '../clock-face/clock-face.component';
import { ClockSetupComponent } from '../clock-setup/clock-setup.component';
import { ClockFaceAnalogComponent } from '../clock-face-analog/clock-face-analog.component';
import { ClockFaceDigitalComponent } from '../clock-face-digital/clock-face-digital.component';

describe('ClockDashComponent', () => {
  let component: ClockDashComponent;
  let fixture: ComponentFixture<ClockDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ClockDashComponent, 
        ClockFaceComponent,
        ClockSetupComponent,
        ClockFaceAnalogComponent,
        ClockFaceDigitalComponent
      ],
      imports: [
        ClocksMaterialModule,
        StoreModule.forRoot({
          config: configReducers
        }),
        EffectsModule.forRoot([
          ClockEffects
        ])
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
