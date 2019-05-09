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
    let currentTimezone = this.getCurrentTimeZone();
    let myClocks = localStorage.getItem(STORAGEKEY);
    if(myClocks!==null){
      config = JSON.parse(myClocks) as IConfig;
    }
    if(config.myZones==null){
      config.myZones=[];
    }
    if(!config.myZones.find(p=>p===currentTimezone)){
      config = {
        ...config,
        myZones: [
          ...config.myZones,
          currentTimezone
        ]
      };
    }
    return of(config);
  }

  updateConfig(myConfig: IConfig): Observable<IConfig>{
    if(myConfig!=null){
      localStorage.setItem(STORAGEKEY, JSON.stringify(myConfig));
    }
    return this.readConfig();
  }

  getCurrentTimeZone(){
    let intlx = new Intl.DateTimeFormat();
    let optionsx = intlx.resolvedOptions();
    return optionsx.timeZone;
  }
}
