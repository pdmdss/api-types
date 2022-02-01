import { APIError, APIStandardError } from '@t/api/error';
import { ChargeRequest } from '@t/api/charge/charge.request';

export namespace ChargeCreate {
  export type Method = 'POST';

  export interface QueryParams {
  }

  export type RequestBodyJSON = ChargeRequest.All;


  export interface ResponseOk {
  }

  export type ResponseError = APIStandardError |
    APIError<string, 402>;

  export type Response = ResponseOk | ResponseError;
}
