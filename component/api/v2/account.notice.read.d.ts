import { APIV2BaseError } from './error';

export namespace APIV2AccountNoticeRead {
  export type Method = 'PUT';

  export type QueryParams = {};

  export interface ResponseOk {
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
