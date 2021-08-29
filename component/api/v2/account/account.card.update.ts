import { APIV2BaseError } from '../error';

export namespace APIV2AccountCardUpdate {
  export type Method = 'POST';

  export type QueryParams = {};

  export type RequestBodyJSON = {
    deleteIds?: number[];
    addToken?: string;
    priority?: number;
  };

  export interface ResponseOk {
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
