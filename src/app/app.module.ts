import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ClocksMaterialModule } from './clocksmaterial.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockDashComponent } from './clock-dash/clock-dash.component';
import { ClockFaceComponent } from './clock-face/clock-face.component';
import { ClockFaceDigitalComponent } from './clock-face-digital/clock-face-digital.component';
import { ClockFaceAnalogComponent } from './clock-face-analog/clock-face-analog.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockDashComponent,
    ClockFaceComponent,
    ClockFaceDigitalComponent,
    ClockFaceAnalogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClocksMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
