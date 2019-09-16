import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockDashComponent } from './components/clock-dash/clock-dash.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: "",
    component: ClockDashComponent
  },
  {
    path: "config",
    loadChildren: "./modules/clock-config/clock-config.module#ClockConfigModule"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
