import { APIHead } from '@t/api/head';
import { APIStandardError } from '@t/api/error';
import { Components } from '@t/components';

export namespace ApikeyGet {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface ResponseOk extends APIHead {
    status: 'ok';
    apikey: Components.Apikey;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
