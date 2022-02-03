import { APIStandardError } from '../error';

export namespace SocketClose {
  export type Method = 'DELETE';

  export interface QueryParams {
  }


  export interface ResponseOk {
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
