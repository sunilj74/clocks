import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: "clock-face-analog",
  templateUrl: "./clock-face-analog.component.html",
  styleUrls: ["./clock-face-analog.component.css"]
})
export class ClockFaceAnalogComponent implements OnInit {
  @Input() currentTime: Date;
  @Input() timezone: any;
  ampm: string = "AM";

  rotate: any = {
    hours: "rotate(0, 50, 50)",
    minutes: "rotate(0, 50, 50)",
    seconds: "rotate(0, 50, 50)"
  };

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes != null && changes["currentTime"] != null) {
      this.computeAngle();
    }
  }

  clockImage() {
    return {
      background: "url(assets/images/clocks/easy.svg)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",
      width: "150px",
      height: "150px"
    };
  }

  computeAngle() {
    let timeAtZone = new Date(this.currentTime.toLocaleString("en-US", {timeZone: this.timezone.tz}));
    let time = {
      hours: timeAtZone.getHours(),
      minutes: timeAtZone.getMinutes(),
      seconds: timeAtZone.getSeconds()
    }
    let hours = (360 * time.hours) / 12 + time.minutes / 2;
    let minutes = (360 * time.minutes) / 60;
    let seconds = (360 * time.seconds) / 60;

    this.rotate = {
      hours: `rotate(${hours}, 50, 50)`,
      minutes: `rotate(${minutes}, 50, 50)`,
      seconds: `rotate(${seconds}, 50, 50)`
    };

    this.ampm = (time.hours>11?"PM":"AM");
  }
}
