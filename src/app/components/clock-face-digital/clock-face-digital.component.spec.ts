import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClocksMaterialModule } from "../../clocksmaterial.module";
import { StoreModule } from "@ngrx/store";
import { configReducers } from "../../store/reducers/config.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ClockEffects } from "../../store/effects/clock.effects";

import { ClockFaceDigitalComponent } from './clock-face-digital.component';

describe('ClockFaceDigitalComponent', () => {
  let component: ClockFaceDigitalComponent;
  let fixture: ComponentFixture<ClockFaceDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockFaceDigitalComponent ],
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
    fixture = TestBed.createComponent(ClockFaceDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
