import { Component, Input, OnInit, SimpleChanges, SecurityContext } from '@angular/core';
import { IConfig } from 'src/app/store/models/iconfig';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "clock-face-analog",
  templateUrl: "./clock-face-analog.component.html",
  styleUrls: ["./clock-face-analog.component.css"]
})
export class ClockFaceAnalogComponent implements OnInit {

  @Input() currentTime: Date = new Date();
  @Input() timezone: any;
  analogStyle: any;
  config$: Observable<IConfig>;
  zoomLevel: number;
  hourStroke = "#43464B";
  minuteStroke = "#43464B";
  secondStroke = "#800000";

  ampm: string = "AM";

  rotate: any = {
    hours: "rotate(0, 50, 50)",
    minutes: "rotate(0, 50, 50)",
    seconds: "rotate(0, 50, 50)"
  };

  constructor(
    private store: Store<IConfig>, 
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer

  ) 
  {
    this.config$ = this.store.pipe(
        select('config')
    );
    this.config$.subscribe(p=>{
      this.hourStroke = p.hourStroke;
      this.minuteStroke = p.minuteStroke;
      this.secondStroke = p.secondStroke;
      let background = `url("data:image/svg+xml;utf8,${this.clockImage(p)}")`;
      let width = `${40 + (100 * p.zoomLevel)}px`;
      let height = `${40 + (100 * p.zoomLevel)}px`;
      this.analogStyle = this.sanitizer.bypassSecurityTrustStyle(`
           background-image: ${background};
           width: ${width};
           height: ${height};`
      );
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes != null && changes["currentTime"] != null) {
      this.computeAngle();
    }
  }

  getAnalogStyle(){
    return this.analogStyle;
  }

  clockImage(config) {
    const TICKS =[
      { rx: 195, ry: 110, x: 195, y: 110, deg: 90, digit: "3", roman: "III" },
      { rx: 183.61, ry: 152.5, x: 192.27, y: 157.5, deg: 120, digit: "4", roman: "IV" },
      { rx: 152.5, ry: 183.61, x: 157.5, y: 192.27, deg: 150, digit: "5", roman: "V" },
      { rx: 110, ry: 195, x: 110, y: 195, deg: 180, digit: "6", roman: "VI" },
      { rx: 67.5, ry: 183.61, x: 62.5, y: 192.27, deg: 210, digit: "7", roman: "VII" },
      { rx: 36.39, ry: 152.5, x: 27.73, y: 157.5, deg: 240, digit: "8", roman: "VIII" },
      { rx: 25, ry: 110, x: 25, y: 110, deg: 270, digit: "9", roman: "IX" },
      { rx: 36.39, ry: 67.5, x: 27.73, y: 62.5, deg: 300, digit: "10", roman: "X" },
      { rx: 67.5, ry: 36.39, x: 62.5, y: 27.73, deg: 330, digit: "11", roman: "XI" },
      { rx: 110, ry: 25, x: 110, y: 25, deg: 0, digit: "12", roman: "XII" },
      { rx: 152.5, ry: 36.39, x: 157.5, y: 27.73, deg: 30, digit: "1", roman: "I" },
      { rx: 183.61, ry: 67.5, x: 192.27, y: 62.5, deg: 60, digit: "2", roman: "II" }

    ];
    let format = config.format;
    let textStroke = config.textStroke;
    let stroke = config.stroke;
    let fillOne = config.fillOne;
    let fillTwo = config.fillTwo;
    let round = config.round;
    let fill = "url(#fillcolor)";
    let gradient = "";
    if(fillOne!=null&&fillOne.length>0){
      gradient = `<stop offset='0%' stop-color='${fillOne}' />`;
    }
    let outline = `<rect x='4' y='4' width='214' height='214' rx='50' ry='50' stroke='${stroke}' stroke-width='2' fill='${fill}' />`;
    if(round){
      outline = `<circle cx='110' cy='110' r='109' stroke='${stroke}' stroke-width='2' fill='${fill}' />`;
    }
    let alltexts = TICKS.map(p => {
      let tick = p[format];
      if (tick == null) {
        tick = "|";
      }
      let x = round ? p.rx : p.x;
      let y = round ? p.ry : p.y;
      return `<text style='text-anchor: middle;' x='${x}' y='${y}' stroke='${textStroke}' transform='rotate(${p.deg},${x},${y})'>${tick}</text>`;
    });
    let svg = `
<svg version='1.1'
     baseProfile='full'
     width='220' height='220'
     xmlns='http://www.w3.org/2000/svg'>
	 <defs>
      <linearGradient id='fillcolor' x1='0%' y1='0%' x2='100%' y2='100%' >    
          ${gradient}
          <stop offset='100%' stop-color='${fillTwo}' />
      </linearGradient> 
	 </defs>

    ${outline}
    ${alltexts.join("")}
</svg>
`;
    let lines = encodeURIComponent(svg).split("\n").map(p=>p.trim());
    let svg2 = lines.join(" ");
    return svg2;
  }

  computeAngle() {
    if(this.timezone==null){
      return;
    }
    let timeAtZone = new Date(
      this.currentTime.toLocaleString("en-US", { timeZone: this.timezone.tz })
    );
    let time = {
      hours: timeAtZone.getHours(),
      minutes: timeAtZone.getMinutes(),
      seconds: timeAtZone.getSeconds()
    };
    let hours = (360 * time.hours) / 12 + time.minutes / 2;
    let minutes = (360 * time.minutes) / 60;
    let seconds = (360 * time.seconds) / 60;

    this.rotate = {
      hours: `rotate(${hours}, 50, 50)`,
      minutes: `rotate(${minutes}, 50, 50)`,
      seconds: `rotate(${seconds}, 50, 50)`
    };

    this.ampm = time.hours > 11 ? "PM" : "AM";
  }
}
