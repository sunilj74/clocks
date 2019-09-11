import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClocksMaterialModule } from "../../clocksmaterial.module";
import { StoreModule } from "@ngrx/store";
import { configReducers } from "../../store/reducers/config.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ClockEffects } from "../../store/effects/clock.effects";

import { ClockSetupComponent } from './clock-setup.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClockSetupComponent', () => {
  let component: ClockSetupComponent;
  let fixture: ComponentFixture<ClockSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClockSetupComponent],
      imports: [
        ClocksMaterialModule,
        BrowserAnimationsModule,
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
    fixture = TestBed.createComponent(ClockSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
