import { Component, OnInit } from '@angular/core';
import { TimezoneService } from '../../services/timezone.service';
import { Store, select } from '@ngrx/store';
import { IConfig } from 'src/app/store/models/iconfig';
import { LoadConfig } from 'src/app/store/actions/clock.actions';

@Component({
  selector: "clock-dash",
  templateUrl: "./clock-dash.component.html",
  styleUrls: ["./clock-dash.component.css"]
})
export class ClockDashComponent implements OnInit {
  timeZones: any[];
  flexWidth: string = "30%";
  config$: any;
  currentTime: Date = new Date();

  constructor(
    private tzService: TimezoneService,
    private store: Store<IConfig>
  ) {
    this.config$ = store.pipe(
      select('config')
    );
    this.config$.subscribe(p=>{
      this.timeZones = this.tzService.getTimeZoneData(p.myZones);
      let count = this.timeZones.length;
      if (count < 5 && count % 2 == 0 && count % 3 != 0) {
        this.flexWidth = "40%";
      }
      else if (count > 0) {
        this.flexWidth = "30%";
      }
    });
    setInterval(this.tickTock.bind(this), 1000);
  }

  ngOnInit() {
    this.store.dispatch(new LoadConfig());
  }

  tickTock() {
    this.currentTime = new Date();
  }
}
