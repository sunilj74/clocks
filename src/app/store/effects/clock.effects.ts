import { Actions, Effect, ofType} from '@ngrx/effects';
import { TimezoneService } from 'src/app/services/timezone.service';
import { ActionTypes, LoadConfigSuccess } from '../actions/clock.actions';
import { mergeMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class  ClockEffects {
    constructor(private actions$: Actions, private tzService: TimezoneService) {
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
}
