import { Injectable } from '@angular/core';
import { TZMASTER } from './timezonedata';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  constructor() { }

  getTimeZones(){
    let data = TZMASTER.filter(p=>p.tz != 'Deprecated' && p.tz != 'Alias');
    return data;
  }

  getSettings(){
    return {
      isDigital: false
    };
  }
}
