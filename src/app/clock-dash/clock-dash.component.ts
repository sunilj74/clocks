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
  cols: number = 1;
  appSettings: any;
  currentTime: Date = new Date();

  ngOnInit() {
    this.appSettings = this.tzService.getSettings();
    this.timeZones = this.tzService.getTimeZones();
    let count = this.timeZones.length;
    if(count > 2){
      this.cols = 3;
    }
    else if(count > 0){
      this.cols = count;
    }
  }



  tickTock() {
    this.currentTime = new Date();
  }

}
