import { APIHead } from '@t/api/head';
import { APIStandardError } from '@t/api/error';
import { Components } from '@t/components';

export namespace ApikeyList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: string;
    cursorToken?: string;
  }


  export interface Item extends Components.Apikey {
    allowed: never;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
    nextToken?: string;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
