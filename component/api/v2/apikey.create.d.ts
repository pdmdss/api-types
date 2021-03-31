import { APIV2BaseError, APIV2Error } from './error';

export namespace APIV2ApiKeyCreate {
  export type Method = 'POST';

  export type QueryParams = {};

  export interface ResponseOk {
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 422>;

  export type Response = ResponseOk | ResponseError;
}
