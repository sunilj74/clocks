import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockFaceComponent } from './clock-face.component';
import { ClockFaceAnalogComponent } from '../clock-face-analog/clock-face-analog.component';
import { ClockFaceDigitalComponent } from '../clock-face-digital/clock-face-digital.component';
import { ClocksMaterialModule } from "../../clocksmaterial.module";
import { StoreModule } from "@ngrx/store";
import { configReducers } from "../../store/reducers/config.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ClockEffects } from "../../store/effects/clock.effects";

describe('ClockFaceComponent', () => {
  let component: ClockFaceComponent;
  let fixture: ComponentFixture<ClockFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClockFaceAnalogComponent,
        ClockFaceDigitalComponent,
        ClockFaceComponent
      ],
      imports: [
        ClocksMaterialModule,
        StoreModule.forRoot({
          config: configReducers
        }),
        EffectsModule.forRoot([ClockEffects])
      ]
    }).compileComponents();
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
