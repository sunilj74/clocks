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
      isDigital: true
    };
  }

  getUserTimeZones(){
    let userZones = null;
    if(userZones==null){
      let intlx = new Intl.DateTimeFormat();
      let optionsx = intlx.resolvedOptions();
      userZones = [optionsx.timeZone];
    }
    return userZones;
  }
}
