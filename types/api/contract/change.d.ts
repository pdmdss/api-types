import { APIError, APIStandardError } from '../error';

export namespace ContractChange {
  export type Method = 'POST';

  export interface QueryParams {
  }

  export interface RequestBody {
    planId: number;
    mode: 'start' | 'end';
  }


  export interface ResponseOk {
  }

  export type ResponseError = APIStandardError | APIError<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
