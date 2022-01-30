import { APIV2Head } from '../head';
import { APIV2BaseError } from '../error';
import { Telegram } from '../../../telegram';

interface Coordinate {
  latitude?: { text: string, value: string };
  longitude?: { text: string, value: string };
  condition?: string;
}

interface Axis {
  direction: {
    type: '方向';
    unit: '８方位漢字';
    value: string | null;
    azimuth: string | null;
    condition?: string;
  };
  radius: {
    type: string;
    unit: 'km';
    value: string;
  };
}

export namespace APIV2GDWeatherTyphoonEvent {
  export type Method = 'GET';

  export type QueryParams = {
    parts?: string;
  };

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    event: {
      tcNumber: string;
      name: {
        text: string | null;
        kana: string | null;
        number: string | null;
      };
    };
    items: {
      id: number;
      remark: string | null;
      dateTime: string;
      classification?: {
        category: string;
        name: string;
        area?: string | null;
        intensity?: string | null;
      };
      center?: {
        location: string | null;
        coordinate: Coordinate;
        direction: {
          type: '移動方向';
          unit: '１６方位漢字';
          value: string | null;
          azimuth: string | null;
          condition?: string;
        };
        speed: {
          type: '移動速度';
          unit: 'km/h';
          value: string | null;
          condition?: string;
        };
        pressure: {
          type: '中心気圧';
          unit: 'hPa';
          value: string;
        };
      };
      wind?: {
        average: {
          type: '最大風速';
          unit: 'm/s';
          value: string | null;
          condition?: string;
        };
        instantaneous: {
          type: '最大瞬間風速';
          unit: 'm/s';
          value: string | null;
        };
        area: {
          strong: Axis[];
          storm: Axis[];
        };
      }
      telegrams?: [Telegram]
    }[];
    nextToken?: string;
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
