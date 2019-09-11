import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

import { ClockModalComponent } from './clock-modal.component';
import { ClockAddFormComponent } from '../clock-add-form/clock-add-form.component';
import { ClocksMaterialModule } from 'src/app/clocksmaterial.module';
import { StoreModule } from "@ngrx/store";
import { configReducers } from "../../store/reducers/config.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ClockEffects } from "../../store/effects/clock.effects";
import { InputLookupDirective } from 'src/app/directives/validators/input-lookup.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ClockModalComponent', () => {
  let component: ClockModalComponent;
  let fixture: ComponentFixture<ClockModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ClockModalComponent, 
        ClockAddFormComponent,
        InputLookupDirective
      ],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ClocksMaterialModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          config: configReducers
        }),
        EffectsModule.forRoot([ClockEffects])
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }

      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
