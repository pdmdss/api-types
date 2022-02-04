export namespace Earthquake {
  export type IntensityClass = '1' | '2' | '3' | '4' | '5-' | '5+' | '6-' | '6+' | '7';
  export type LpgmIntensityClass = '0' | '1' | '2' | '3' | '4';

  export interface Coordinate {
    latitude?: {
      text: string;
      value: string;
    };
    longitude?: {
      text: string;
      value: string;
    };
    height?: {
      type: '高さ';
      unit: 'm';
      value: string;
    };
    geodeticSystem?: '日本測地系';
    condition?: string;
  }

  export interface EarthquakeHypocenterDepth {
    type: '深さ';
    unit: 'km';
    value: string | null;
    condition?: 'ごく浅い' | '７００ｋｍ以上' | '不明';
  }

  export interface EarthquakeHypocenter {
    code: string;
    name: string;
    coordinate: Coordinate;
    depth: EarthquakeHypocenterDepth;
    source?: string;
  }

  export interface EarthquakeMagnitude {
    type: 'マグニチュード';
    unit: 'Mj' | 'M';
    value: string | null;
    condition?: 'Ｍ不明' | 'Ｍ８を超える巨大地震';
  }

  export interface Event {
    id: number;
    eventId: string;
    originTime?: string;
    arrivalTime: string;
    hypocenter?: EarthquakeHypocenter;
    magnitude?: EarthquakeMagnitude;
    maxInt?: IntensityClass;
    maxLpgmInt?: LpgmIntensityClass;
  }
}
