import { Action } from "@ngrx/store";
import { DEFAULTCONFIG, IConfig } from '../models/iconfig';
import { ActionTypes, ConfigActions } from '../actions/clock.actions';


export function configReducers(state:IConfig = DEFAULTCONFIG, action: ConfigActions){
    switch (action.type) {
        case ActionTypes.AddClock:
            return {
                ...state,
                myZones: [
                    ...state.myZones,
                    action.payload
                ]
            };

        case ActionTypes.RemoveClock:
            return {
                ...state,
                myZones: state.myZones
                            .filter(p=>p!==action.payload)
            };

        case ActionTypes.ToggleDigital:
            return {
                ...state,
                isDigital: !state.isDigital
            };

        case ActionTypes.ZoomIn:
            return {
                ...state,
                zoomLevel: state.zoomLevel + 1
            };

        case ActionTypes.ZoomOut:
            return {
                ...state,
                zoomLevel: state.zoomLevel - 1
            };

        case ActionTypes.LoadConfigSuccess:
            return action.payload;

        default:
            return state;
    }
}