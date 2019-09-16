import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { lookupValidator } from 'src/app/validators/lookup';
import { TZMASTER } from 'src/app/services/timezonedata';
import { startWith, map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { IConfig, DEFAULTCONFIG } from 'src/app/store/models/iconfig';
import { UpdateConfig } from 'src/app/store/actions/clock.actions';

@Component({
  selector: "app-config-main",
  templateUrl: "./config-main.component.html",
  styleUrls: ["./config-main.component.css"]
})
export class ConfigMainComponent implements OnInit {
  configForm = new FormGroup({
    format: new FormControl(),
    textStroke: new FormControl(),
    stroke: new FormControl(),
    fillOne: new FormControl(),
    fillTwo: new FormControl(),
    round: new FormControl(),
    hourStroke: new FormControl(),
    minuteStroke: new FormControl(),
    secondStroke: new FormControl(),
    digitalBorder: new FormControl(),
    digitalBackground: new FormControl(),
    digitalGradient: new FormControl(),
    digitalTextStroke: new FormControl(),
    digitalAMPMStroke: new FormControl()
  });

  filteredCities: Observable<string[]>;
  tzData: string[];
  config$: Observable<IConfig>;
  config: IConfig = DEFAULTCONFIG;

  constructor(private store: Store<IConfig>) {
    this.config$ = this.store.pipe(
      select('config')
    );
    this.updateDataIntoForm();
    this.config$.subscribe(p=>{
      this.config = p;
      this.updateDataIntoForm();
    });
  }

  ngOnInit() {
    this.tzData = TZMASTER.map(p => p.tz);
  }

  updateDataIntoForm(){
    let values = {
      format: this.config.format,
      textStroke: this.config.textStroke,
      stroke: this.config.stroke,
      fillOne: this.config.fillOne,
      fillTwo: this.config.fillTwo,
      round: this.config.round,
      hourStroke: this.config.hourStroke,
      minuteStroke: this.config.minuteStroke,
      secondStroke: this.config.secondStroke,
      digitalBorder: this.config.digitalBorder,
      digitalBackground: this.config.digitalBackground,
      digitalGradient: this.config.digitalGradient,
      digitalTextStroke: this.config.digitalTextStroke,
      digitalAMPMStroke: this.config.digitalAMPMStroke
    };

    this.configForm.setValue(values);
  }

  submitConfigForm(){
    this.store.dispatch(new UpdateConfig(this.configForm.value));
  }
}
