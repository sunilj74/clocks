import { Component, OnInit } from '@angular/core';
import { TimezoneService } from '../timezone.service';

@Component({
  selector: 'clock-dash',
  templateUrl: './clock-dash.component.html',
  styleUrls: ['./clock-dash.component.css']
})
export class ClockDashComponent implements OnInit {

  constructor(private tzService: TimezoneService) {
    setInterval(this.tickTock.bind(this), 1000);
  }

  timeZones: any[];
  appSettings: any;
  currentTime: Date = new Date();

  ngOnInit() {
    this.appSettings = this.tzService.getSettings();
    this.timeZones = this.tzService.getTimeZones();
  }

  tickTock() {
    this.currentTime = new Date();
  }

}
