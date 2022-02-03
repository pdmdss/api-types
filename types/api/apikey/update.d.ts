import { APIError, APIStandardError } from '../error';

export namespace ApikeyUpdate {
  export type Method = 'PUT';

  export interface QueryParams {
  }

  export interface RequestBodyJSON {
    name?: string | null;
    scopes?: string[];
    allowed?: {
      ipAddresses?: string[];
      originDomains?: string[];
    };
  }


  export interface ResponseOk {
  }

  export type ResponseError = APIStandardError |
    APIError<string, 400> |
    APIError<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
