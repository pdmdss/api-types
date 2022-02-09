import { APIError, APIStandardError } from '../error';
import { ChargeRequest } from './charge.request';

export namespace ChargeCodeCreate {
  export type Method = 'POST';

  export interface QueryParams {
  }

  export type RequestBodyJSON = ChargeRequest.Card;


  export interface ResponseOk {
  }

  export type ResponseError = APIStandardError |
    APIError<string, 402>;

  export type Response = ResponseOk | ResponseError;
}
