import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { IConfig } from 'src/app/store/models/iconfig';
import { Observable } from 'rxjs';
import { RemoveClock } from 'src/app/store/actions/clock.actions';

@Component({
  selector: 'clock-face',
  templateUrl: './clock-face.component.html',
  styleUrls: ['./clock-face.component.css']
})
export class ClockFaceComponent implements OnInit {
  @Input() isDigital: boolean;
  @Input() timezone: any;
  @Input() currentTime: Date;

  config$: Observable<IConfig>;

  city: string = "";
  flag: string = null;

  constructor(private store: Store<IConfig>) { 
    this.config$ = this.store.select('config');
  }

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
      this.flag = `https://www.countryflags.io/${this.timezone.country}/flat/24.png`;
    }
  }

  removeClock(){
    this.store.dispatch(new RemoveClock(this.timezone.tz));
  }
}
