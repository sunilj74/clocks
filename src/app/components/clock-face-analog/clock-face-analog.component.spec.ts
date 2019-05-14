import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClocksMaterialModule } from "../../clocksmaterial.module";
import { StoreModule } from "@ngrx/store";
import { configReducers } from "../../store/reducers/config.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ClockEffects } from "../../store/effects/clock.effects";

import { ClockFaceAnalogComponent } from './clock-face-analog.component';
import { RouterModule } from '@angular/router';

describe('ClockFaceAnalogComponent', () => {
  let component: ClockFaceAnalogComponent;
  let fixture: ComponentFixture<ClockFaceAnalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClockFaceAnalogComponent],
      imports: [
        ClocksMaterialModule,
        RouterModule.forRoot([]),
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
    fixture = TestBed.createComponent(ClockFaceAnalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
