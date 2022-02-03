import { APIHead } from '../head';
import { APIStandardError } from '../error';
import { Components } from '../../components';

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
