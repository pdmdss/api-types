export namespace Earthquake {
  export type IntensityClass = '1' | '2' | '3' | '4' | '5-' | '5+' | '6-' | '6+' | '7';
  export type LpgmIntensityClass = '0' | '1' | '2' | '3' | '4';

  interface CoordinateNormal {
    latitude: {
      text: string;
      value: string;
    };
    longitude: {
      text: string;
      value: string;
    };
    height?: {
      type: '高さ';
      unit: 'm';
      value: string;
    };
    condition: never;
    geodeticSystem?: '日本測地系';
  }

  interface CoordinateUnknown {
    latitude: never;
    longitude: never;
    height: never;
    geodeticSystem: never;
    condition: '不明';
  }

  export type Coordinate = CoordinateNormal | CoordinateUnknown;


  interface DepthBase {
    type: '深さ';
    unit: 'km';
    value: string | null;
    condition: string | never;
  }

  interface DepthNormal extends DepthBase {
    value: string;
    condition: never;
  }

  interface DepthShallow extends DepthBase {
    value: '0';
    condition: 'ごく浅い';
  }

  interface DepthDeep extends DepthBase {
    value: '700';
    condition: '７００ｋｍ以上';
  }

  interface DepthUnknown extends DepthBase {
    value: null;
    condition: '不明';
  }

  export type EarthquakeHypocenterDepth = DepthNormal | DepthShallow | DepthDeep | DepthUnknown;


  export interface EarthquakeHypocenter {
    code: string;
    name: string;
    coordinate: Coordinate;
    depth: EarthquakeHypocenterDepth;
    source?: string;
  }


  interface MagnitudeBase {
    type: 'マグニチュード';
    unit: 'Mj' | 'M';
    value: string | null;
    condition: string | never;
  }

  interface MagnitudeNormal extends MagnitudeBase {
    value: string;
    condition: never;
  }

  interface MagnitudeUnknown extends MagnitudeBase {
    value: null;
    condition: 'Ｍ不明' | 'Ｍ８を超える巨大地震';
  }

  export type EarthquakeMagnitude = MagnitudeNormal | MagnitudeUnknown;


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
