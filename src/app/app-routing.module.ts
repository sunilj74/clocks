import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockDashComponent } from './clock-dash/clock-dash.component';


const routes: Routes = [
  {
    path: '',
    component: ClockDashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
