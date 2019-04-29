import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "clock-face-digital",
  templateUrl: "./clock-face-digital.component.html",
  styleUrls: ["./clock-face-digital.component.css"]
})
export class ClockFaceDigitalComponent implements OnInit {
  @Input() currentTime: Date;
  @Input() timezone: any;

  constructor() {}

  ngOnInit() {}
}
