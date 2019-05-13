import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ConfigMainComponent } from './components/config-main/config-main.component';

const routes: Routes = [
  {
    path: "",
    component: ConfigMainComponent
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class ClockConfigRoutingModule{
}
