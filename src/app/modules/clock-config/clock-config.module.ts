import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigMainComponent } from "./components/config-main/config-main.component";
import { ClockConfigRoutingModule } from './clock-config-routing.module';
import { ClocksMaterialModule } from 'src/app/clocksmaterial.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConfigMainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClockConfigRoutingModule,
    ClocksMaterialModule
  ]
})
export class ClockConfigModule { }
