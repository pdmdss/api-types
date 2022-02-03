import { APIHead } from '../head';
import { Components } from '../../components';
import { APIError, APIStandardError } from '../error';


export namespace GDWeatherTyphoonEvent {
  export type Method = 'GET';

  export interface QueryParams {
  }

  export { Typhoon };


  export interface Event {
    tcNumber: string;
    name: {
      text: string | null;
      kana: string | null;
      number: string | null;
    };
  }

  export interface Item extends Typhoon.Event {
    telegrams: [Components.Telegram.ItemJSONOnly];
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    event: Event;
    items: Item[];
  }

  export type ResponseError = APIStandardError |
    APIError<string, 404>;

  export type Response = ResponseOk | ResponseError;
}

declare namespace Typhoon {
  export interface Coordinate {
    latitude?: { text: string, value: string };
    longitude?: { text: string, value: string };
    condition?: string;
  }

  export interface Axis {
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

  export interface Classification {
    category: string;
    name: string;
    area?: string | null;
    intensity?: string | null;
  }

  export interface CenterDirection {
    type: '移動方向';
    unit: '１６方位漢字';
    value: string | null;
    azimuth: string | null;
    condition?: string;
  }

  export interface CenterSpeed {
    type: '移動速度';
    unit: 'km/h';
    value: string | null;
    condition?: string;
  }

  export interface CenterPressure {
    type: '中心気圧';
    unit: 'hPa';
    value: string;
  }

  export interface Center {
    location: string | null;
    coordinate: Coordinate;
    direction: CenterDirection;
    speed: CenterSpeed;
    pressure: CenterPressure;
  }

  export interface WindAverage {
    type: '最大風速';
    unit: 'm/s';
    value: string | null;
    condition?: string;
  }

  export interface WindInstantaneous {
    type: '最大瞬間風速';
    unit: 'm/s';
    value: string | null;
  }

  export interface WindArea {
    strong: Axis[];
    storm: Axis[];
  }

  export interface Wind {
    average: WindAverage;
    instantaneous: WindInstantaneous;
    area: WindArea;
  }

  export interface Event {
    id: number;
    remark: string | null;
    dateTime: string;
    classification: Classification;
    center: Center;
    wind?: Wind;
  }
}
