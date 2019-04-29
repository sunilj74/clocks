import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'clock-face',
  templateUrl: './clock-face.component.html',
  styleUrls: ['./clock-face.component.css']
})
export class ClockFaceComponent implements OnInit {
  @Input() isDigital: boolean;
  @Input() timezone: any;
  @Input() currentTime: Date;

  city: string = "";
  flag: string = null;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes!=null&&changes['timezone']!=null){
      let cityName = this.timezone.tz;
      if(cityName!=""){
        let cityParts = cityName.split('/');
        cityName = cityParts[cityParts.length-1];
        cityName = cityName.replace("_", " ");
        this.city = cityName;
      }
      this.flag = `https://www.countryflags.io/${this.timezone.country}/flat/64.png`;
    }
  }

}
