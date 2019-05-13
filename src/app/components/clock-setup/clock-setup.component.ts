import { Component, OnInit, Input } from '@angular/core';
import { clockSetupAnimations } from "./clock-setup.animations";
import { Store } from '@ngrx/store';
import { IConfig } from 'src/app/store/models/iconfig';
import { ToggleDigital, ZoomInAction, ZoomOutAction } from 'src/app/store/actions/clock.actions';
import { MatDialog } from '@angular/material';
import { ClockModalComponent } from '../clock-modal/clock-modal.component';

@Component({
  selector: "clock-setup",
  templateUrl: "./clock-setup.component.html",
  styleUrls: ["./clock-setup.component.css"],
  animations: clockSetupAnimations
})
export class ClockSetupComponent{
  @Input() config: any;
  showOptions: boolean = false;
  zoomer = "inactive";
  buttons: number = 2;

  constructor(private store: Store<IConfig>, private addModal: MatDialog) {}

  toggleOptions() {
    this.showOptions = !this.showOptions;
    this.zoomer = this.showOptions ? "active" : "inactive";
  }

  toggleIsDigital() {
    this.store.dispatch(new ToggleDigital());
  }

  zoomIn() {
    if (this.config.zoomLevel < this.config.maxZoomLevel) {
      this.store.dispatch(new ZoomInAction());
    }
  }

  zoomOut() {
    if (this.config.zoomLevel > 1) {
      this.store.dispatch(new ZoomOutAction());
    }
  }

  showAddModal(){
    const modalRef = this.addModal.open(ClockModalComponent, {width: '280px', height: '200px'});

  }
}
