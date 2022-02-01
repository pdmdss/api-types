import { APIHead } from '@t/api/head';
import { APIError, APIStandardError } from '@t/api/error';
import { Components } from '@t/components';

export namespace ApikeyCreate {
  export type Method = 'POST';

  export interface QueryParams {
  }


  export interface ResponseOk extends APIHead {
    status: 'ok';
    apikey: Components.Apikey;
  }

  export type ResponseError = APIStandardError |
    APIError<string, 422>;

  export type Response = ResponseOk | ResponseError;
}
