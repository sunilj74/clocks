import { Injectable } from '@angular/core';
import { TZMASTER } from './timezonedata';
import { IConfig, DEFAULTCONFIG } from '../store/models/iconfig';
import { Observable, of } from 'rxjs';

const STORAGEKEY = "MYCLOCKS";

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  constructor() { 
    this.readConfig();
  }

  getTimeZoneData(myZones: string[]){
    let data = [];
    if(myZones!=null && myZones.length>0){
      data = TZMASTER
              .filter(p => myZones
                .find(q => q == p.tz) != null);
    }
    return data;
  }

  readConfig(): Observable<IConfig>{
    let config: IConfig = DEFAULTCONFIG;
    let myClocks = localStorage.getItem(STORAGEKEY);
    if(myClocks!==null){
      config = JSON.parse(myClocks) as IConfig;
    }
    if(!config.myZones){
      config = {
        ...config,
        myZones: this.getUserTimeZones()
      }
    }
    return of(config);
  }

  updateConfig(myConfig: IConfig){
    localStorage.setItem(STORAGEKEY, JSON.stringify(myConfig));
  }

  getUserTimeZones(){
    let userZones = [];
    userZones = TZMASTER
        .slice(0, 1)
        .map(p=>p.tz);

    let intlx = new Intl.DateTimeFormat();
    let optionsx = intlx.resolvedOptions();
    userZones.push(optionsx.timeZone);

    return userZones;
  }
}
