import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from "@angular/forms";
import { ClocksMaterialModule } from "../../clocksmaterial.module";
import { StoreModule } from "@ngrx/store";
import { configReducers } from '../../store/reducers/config.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClockEffects } from '../../store/effects/clock.effects';

import { ClockAddFormComponent } from './clock-add-form.component';
import { InputLookupDirective } from 'src/app/directives/validators/input-lookup.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClockAddFormComponent', () => {
  let component: ClockAddFormComponent;
  let fixture: ComponentFixture<ClockAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ClockAddFormComponent,
        InputLookupDirective
      ],
      imports: [
        ClocksMaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
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
    fixture = TestBed.createComponent(ClockAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
