import { Actions, Effect, ofType} from '@ngrx/effects';
import { TimezoneService } from 'src/app/services/timezone.service';
import { ActionTypes, LoadConfigSuccess, SaveConfigSuccess } from '../actions/clock.actions';
import { mergeMap, map, withLatestFrom, switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IConfig } from '../models/iconfig';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';

@Injectable()
export class  ClockEffects {
    constructor(
        private actions$: Actions, 
        private tzService: TimezoneService, 
        private store$: Store<IConfig>
    ) 
    {
    }

    @Effect() loadConfig$ = this.actions$
            .pipe(
                ofType(ActionTypes.LoadConfig),
                mergeMap(()=>{
                    return this.tzService.readConfig()
                    .pipe(
                        map(config => {
                            return new LoadConfigSuccess(config);
                        })
                    )
                })
            );

    @Effect() saveConfig$ = this.actions$
            .pipe(
                ofType(
                    ActionTypes.AddClock, 
                    ActionTypes.RemoveClock, 
                    ActionTypes.ToggleDigital, 
                    ActionTypes.ZoomIn, 
                    ActionTypes.ZoomOut
                ),
                withLatestFrom(this.store$.select('config')),
                mergeMap(([action, config])=>{
                    return this.tzService.updateConfig(config)
                    .pipe(
                        map(config => {
                            return new SaveConfigSuccess(config);
                        })
                    );
                })



            );
}
