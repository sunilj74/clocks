import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { lookupValidator } from 'src/app/validators/lookup';
import { TZMASTER } from 'src/app/services/timezonedata';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: "app-config-main",
  templateUrl: "./config-main.component.html",
  styleUrls: ["./config-main.component.css"]
})
export class ConfigMainComponent implements OnInit {
  configForm = new FormGroup({
    isDigital: new FormControl(false),
    zoomLevel: new FormControl("S"),
    zone1: new FormControl("", [lookupValidator(TZMASTER, "tz")]),
    zone2: new FormControl("", [lookupValidator(TZMASTER, "tz")]),
    zone3: new FormControl("", [lookupValidator(TZMASTER, "tz")]),
    zone4: new FormControl("", [lookupValidator(TZMASTER, "tz")]),
    zone5: new FormControl("", [lookupValidator(TZMASTER, "tz")]),
    zone6: new FormControl("", [lookupValidator(TZMASTER, "tz")])
  });

  filteredCities: Observable<string[]>;
  tzData: string[];

  constructor() {}


  ngOnInit() {
    this.tzData = TZMASTER.map(p => p.tz);
    this.filteredCities = this.configForm.controls.zone1
      .valueChanges
      .pipe(
        startWith(''),
        map(p => {
          if (p==null ||p == "") return [];
          let filterValue = p.toLowerCase()
          return this.tzData.filter(q => q.toLowerCase().indexOf(filterValue) != -1);
        })
      );
  }

  resetConfigForm(){
    this.configForm.markAsPristine();
    this.configForm.markAsUntouched();
    this.configForm.updateValueAndValidity();
  }

  submitConfigForm(){
    console.log("submit",this.configForm.value)
  }
}
