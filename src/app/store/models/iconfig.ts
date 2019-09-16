export interface IConfig {
  format: string;
  textStroke: string;
  stroke: string;
  fillOne: string;
  fillTwo: string;
  round: boolean;
  hourStroke: string;
  minuteStroke: string;
  secondStroke: string;
  digitalBorder: string;
  digitalBackground: string;
  digitalGradient: string;
  digitalTextStroke: string;
  digitalAMPMStroke: string;
  isDigital: boolean;
  zoomLevel: number;
  maxZoomLevel: number;
  myZones?: string[];
};

export const DEFAULTCONFIG: IConfig = {
  format: "digit",
  textStroke: "#008080",
  stroke: "#000000",
  fillOne: "#FFD700",
  fillTwo: "#FFA500",
  round: false,
  hourStroke: "#43464B",
  minuteStroke: "#43464B",
  secondStroke: "#800000",
  digitalBorder: "#FFA500",
  digitalBackground: "#FFC0CB",
  digitalGradient: "#FFFFFF",
  digitalTextStroke: "#00FFFF",
  digitalAMPMStroke: "#008080",
  isDigital: false,
  zoomLevel: 2,
  maxZoomLevel: 3,
  myZones: null
};
