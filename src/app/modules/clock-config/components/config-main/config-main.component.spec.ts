import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigMainComponent } from './config-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClocksMaterialModule } from 'src/app/clocksmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { configReducers } from 'src/app/store/reducers/config.reducer';

describe('ConfigMainComponent', () => {
  let component: ConfigMainComponent;
  let fixture: ComponentFixture<ConfigMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigMainComponent],
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ClocksMaterialModule,
        StoreModule.forRoot({
          config: configReducers
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
