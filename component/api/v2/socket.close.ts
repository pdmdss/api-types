import { APIV2BaseError, APIV2Error } from './error';

export namespace APIV2SocketClose {
  export type Method = 'DELETE';

  export type QueryParams = {
    id: string;
  };

  export interface ResponseOk {
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
