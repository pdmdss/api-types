import { APIStandardError } from '../error';
import { APIHead } from '../head';

export namespace ParameterTsunamiStation {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface Item {
    area: string | null;
    prefecture: string | null;
    code: string;
    name: string;
    kana: string;
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
