import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { ClocksMaterialModule } from './clocksmaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockDashComponent } from './components/clock-dash/clock-dash.component';
import { ClockFaceComponent } from './components/clock-face/clock-face.component';
import { ClockFaceDigitalComponent } from "./components/clock-face-digital/clock-face-digital.component";
import { ClockFaceAnalogComponent } from "./components/clock-face-analog/clock-face-analog.component";
import { ClockSetupComponent } from "./components/clock-setup/clock-setup.component";
import { configReducers } from './store/reducers/config.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClockEffects } from './store/effects/clock.effects';
import { ClockAddFormComponent } from './components/clock-add-form/clock-add-form.component';
import { ClockModalComponent } from './components/clock-modal/clock-modal.component';

@NgModule({
  declarations: [
    ClockFaceDigitalComponent,
    ClockFaceAnalogComponent,
    ClockFaceComponent,
    ClockSetupComponent,
    ClockDashComponent,
    AppComponent,
    ClockAddFormComponent,
    ClockModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ClocksMaterialModule,
    AppRoutingModule,
    StoreModule.forRoot({
      config: configReducers
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([
      ClockEffects
    ])
  ],
  entryComponents:[
    ClockModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
