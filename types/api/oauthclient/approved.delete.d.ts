import { APIStandardError } from '@t/api/error';

export namespace OAuthClientApprovedDelete {
  export type Method = 'DELETE';

  export interface QueryParams {
  }


  export interface ResponseOk {
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
