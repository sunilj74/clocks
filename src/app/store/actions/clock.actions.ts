import { Action } from '@ngrx/store';
import { IConfig } from '../models/iconfig';

export enum ActionTypes {
    ZoomIn = '[Clocks] Zoom In',
    ZoomOut = '[Clocks] Zoom Out',
    AddClock = '[Clocks] Add Clock',
    RemoveClock = '[Clocks] Remove Clock',
    ToggleDigital = '[Clocks] Toggle Digital',
    AboutClocks = '[Clocks] About Clocks',
    LoadConfig = '[Clocks] Load Config',
    LoadConfigSuccess = '[Clocks] Load Config Success',
    SaveConfig = '[Clocks] Save Config'
}

export class ZoomInAction implements Action {
    readonly type = ActionTypes.ZoomIn;
}

export class ZoomOutAction implements Action {
    readonly type = ActionTypes.ZoomOut;
}

export class  AddClock implements Action {
    readonly type = ActionTypes.AddClock;

    constructor(public payload: string){}
}

export class RemoveClock implements Action {
    readonly type = ActionTypes.RemoveClock;

    constructor(public payload: string) {}
}

export class ToggleDigital implements Action {
    readonly type = ActionTypes.ToggleDigital;
}

export class AboutClocks implements Action {
    readonly type = ActionTypes.AboutClocks;
}

export class LoadConfig implements Action {
    readonly type = ActionTypes.LoadConfig;
}

export class LoadConfigSuccess implements Action {
    readonly type = ActionTypes.LoadConfigSuccess;
    constructor(public payload: IConfig){}
}

export class SaveConfig implements Action {
    readonly type = ActionTypes.SaveConfig;
}

export type ConfigActions = ZoomInAction |
            ZoomOutAction |
            AddClock |
            RemoveClock |
            ToggleDigital |
            LoadConfig |
            LoadConfigSuccess |
            SaveConfig |
            AboutClocks;



