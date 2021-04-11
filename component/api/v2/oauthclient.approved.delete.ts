import { APIV2BaseError } from './error';

export namespace APIV2OAuthClientApprovedDelete {
  export type Method = 'DELETE';

  export type QueryParams = {};

  export interface ResponseOk {
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
