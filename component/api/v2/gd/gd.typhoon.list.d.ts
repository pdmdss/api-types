import { APIV2Head } from '../head';
import { APIV2BaseError } from '../error';

export namespace APIV2GDWeatherTyphoonList {
  export type Method = 'GET';

  export type QueryParams = {
    limit?: number;
    cursorToken?: string;
  };

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
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
    }[];
    nextToken?: string;
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
