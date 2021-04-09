import { APIV2BaseError } from './error';

export namespace APIV2OAuthClientCreate {
  export type Method = 'POST';

  export type QueryParams = {};

  export interface ResponseOk {
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
