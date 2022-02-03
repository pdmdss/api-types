import { APIHead } from '../head';
import { APIStandardError } from '../error';

export namespace GDWeatherTyphoonList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    cursorToken?: string;
  }


  export interface Item {
    id: number;
    tcNumber: string;
    name: {
      text: string | null;
      kana: string | null;
      number: string | null;
    };
    analysisPeriod: {
      start: string;
      end: string | null
    };
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
    nextToken?: string;

  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
