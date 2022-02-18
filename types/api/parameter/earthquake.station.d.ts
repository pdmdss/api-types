import { APIStandardError } from '../error';
import { APIHead } from '../head';

export namespace ParameterEarthquakeStation {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface Item {
    region: {
      code: string;
      name: string;
      kana: string;
    };
    city: {
      code: string;
      name: string;
      kana: string;
    };
    code: string;
    name: string;
    kana: string;
    status: '現' | '変更' | '新規' | '廃止';
    owner: string;
    latitude: string;
    longitude: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    changeTime: string;
    version: string;
    items: Item[];
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
