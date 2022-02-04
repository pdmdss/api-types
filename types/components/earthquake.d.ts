export namespace Earthquake {
  export type IntensityClass = '1' | '2' | '3' | '4' | '5-' | '5+' | '6-' | '6+' | '7';
  export type LpgmIntensityClass = '1' | '2' | '3' | '4';

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

  export interface EarthquakeHypocenter {
    code: string;
    name: string;
    coordinate: Coordinate;
    depth: EarthquakeHypocenterDepth;
  }

  export type EarthquakeMagnitude = {
    type: 'マグニチュード';
    unit: 'Mj' | 'M';
  } & ({
    value: string;
    condition: never;
  } | {
    value: null;
    condition: 'Ｍ不明';
  })

  export interface Event {
    id: number;
    eventId: string;
    originTime?: string;
    arrivalTime: string;
    hypocenter?: EarthquakeHypocenter;
    magnitude?: EarthquakeMagnitude;
    maxInt: IntensityClass;
    maxLpgmInt: LpgmIntensityClass;
  }
}
