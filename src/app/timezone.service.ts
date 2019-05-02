import { Injectable } from '@angular/core';
import { TZMASTER } from './timezonedata';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {


  constructor() { }

  getTimeZones(){
    let data = [];
    let userZones = this.getUserTimeZones();
    if(userZones!=null && userZones.length>0){
      data = TZMASTER
              .filter(p => userZones
                .find(q => q == p.tz) != null);
    }

    return data;
  }

  getSettings(){
    return {
      isDigital: false
    };
  }

  getUserTimeZones(){
    let userZones = [];
    userZones = TZMASTER
        .slice(0, 6)
        .map(p=>p.tz);

        let intlx = new Intl.DateTimeFormat();
    let optionsx = intlx.resolvedOptions();
    userZones.push(optionsx.timeZone);

    return userZones;
  }
}
