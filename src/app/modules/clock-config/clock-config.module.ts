import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigMainComponent } from "./components/config-main/config-main.component";
import { ClockConfigRoutingModule } from './clock-config-routing.module';

@NgModule({
  declarations: [
    ConfigMainComponent
  ],
  imports: [
    CommonModule,
    ClockConfigRoutingModule
  ]
})
export class ClockConfigModule { }
