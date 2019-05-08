export interface IConfig {
  isDigital: boolean;
  zoomLevel: number;
  maxZoomLevel: number;
  myZones?: string[];
};

export const DEFAULTCONFIG: IConfig = {
    isDigital: false,
    zoomLevel: 2,
    maxZoomLevel: 3,
    myZones: null
};
