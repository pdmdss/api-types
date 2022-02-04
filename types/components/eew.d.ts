export namespace Eew {
  export type IntensityClass = '0' | '1' | '2' | '3' | '4' | '5-' | '5+' | '6-' | '6+' | '7';
  export type LpgmIntensityClass = '0' | '1' | '2' | '3' | '4';

  export interface Coordinate {
    latitude: {
      text: string;
      value: string;
    };
    longitude: {
      text: string;
      value: string;
    };
    height: {
      type: '高さ';
      unit: 'm';
      value: string;
    };
    geodeticSystem: '日本測地系';
  }

  export interface EarthquakeHypocenterDepth {
    type: '深さ';
    unit: 'km';
    value: string;
  }

  export interface EarthquakeHypocenterReduce {
    code: string;
    name: string;
  }

  export interface EarthquakeHypocenterAccuracy {
    epicenters: [
        '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8',
        '0' | '1' | '2' | '3' | '4' | '9'
    ];
    depth: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
    magnitudeCalculation: '0' | '2' | '3' | '4' | '5' | '6' | '8';
    numberOfMagnitudeCalculation: '0' | '1' | '2' | '3' | '4' | '5';
  }

  export interface EarthquakeHypocenter {
    code: string;
    name: string;
    coordinate: Coordinate;
    depth: EarthquakeHypocenterDepth;
    reduce: EarthquakeHypocenterReduce;
    landOrSea?: '内陸' | '海域';
    accuracy: EarthquakeHypocenterAccuracy;
  }

  export interface EarthquakeMagnitude {
    type: 'マグニチュード';
    unit: 'Mj' | 'M';
    value: string | null;
    condition?: 'Ｍ不明';
  }

  export interface Earthquake {
    originTime?: string;
    arrivalTime: string;
    condition?: '仮定震源要素';
    hypocenter: EarthquakeHypocenter;
    magnitude: EarthquakeMagnitude;
  }

  export interface IntensityForecastMaxInt {
    from: IntensityClass | '不明';
    to: IntensityClass | 'over' | '不明';
  }

  export interface IntensityForecastMaxLpgmInt {
    from: LpgmIntensityClass | '不明';
    to: LpgmIntensityClass | 'over' | '不明';
  }

  export interface IntensityAppendix {
    maxIntChange: '0' | '1' | '2';
    maxLpgmIntChange?: '0' | '1' | '2';
    maxIntChangeReason: '0' | '1' | '2' | '3' | '4' | '9';
  }

  export interface Intensity {
    forecastMaxInt: IntensityForecastMaxInt;
    forecastMaxLpgmInt?: IntensityForecastMaxLpgmInt;
    appendix?: IntensityAppendix;
  }

  export interface Event {
    id: number;
    eventId: string;
    serial: number;
    isLastInfo: boolean;
    isCanceled: boolean;
    isWarning?: boolean;
    dateTime: string;
    earthquake?: Earthquake;
    intensity?: Intensity;
    text?: string;
  }
}
