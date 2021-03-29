import { APIV2BaseError, APIV2Error } from './error';

export namespace APIV2ApiKeyDelete {
  export type Method = 'DELETE';

  export type QueryParams = {};

  export interface ResponseOk {
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
