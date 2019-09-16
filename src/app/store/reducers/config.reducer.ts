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

        case ActionTypes.UpdateConfig:
            if(action.payload!=null){
                let values = action.payload;
                return {
                    ...state,
                    format: values.format,
                    textStroke: values.textStroke,
                    stroke: values.stroke,
                    fillOne: values.fillOne,
                    fillTwo: values.fillTwo,
                    round: values.round,
                    hourStroke: values.hourStroke,
                    minuteStroke: values.minuteStroke,
                    secondStroke: values.secondStroke,
                    digitalBorder: values.digitalBorder,
                    digitalBackground: values.digitalBackground,
                    digitalTextStroke: values.digitalTextStroke,
                    digitalAMPMStroke: values.digitalAMPMStroke
                };
            }

        default:
            return state;
    }
}