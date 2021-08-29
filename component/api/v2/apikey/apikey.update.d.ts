import { APIV2BaseError, APIV2Error } from '../error';

export namespace APIV2ApiKeyUpdate {
  export type Method = 'PUT';
  export type RequestContentType = 'application/json';

  export type QueryParams = {};

  export type RequestBodyJSON = {
    name?: string | null;
    scopes?: string[];
    allowed?: {
      ipAddresses?: string[];
      originDomains?: string[];
    };
  };

  export interface ResponseOk {
  }

  export type ResponseError =
    APIV2BaseError
    | APIV2Error<string, 400>
    | APIV2Error<string, 404>
    | APIV2Error<string, 422>;

  export type Response = ResponseOk | ResponseError;
}
