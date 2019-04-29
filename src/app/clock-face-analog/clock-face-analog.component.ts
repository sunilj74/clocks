import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "clock-face-analog",
  templateUrl: "./clock-face-analog.component.html",
  styleUrls: ["./clock-face-analog.component.css"]
})
export class ClockFaceAnalogComponent implements OnInit {
  @Input() currentTime: Date;
  @Input() timezone: any;

  constructor() {}

  ngOnInit() {}
}
