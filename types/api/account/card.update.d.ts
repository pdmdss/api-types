import { APIStandardError } from '../error';

export namespace AccountCardUpdate {
  export type Method = 'POST';

  export interface QueryParams {
  }

  export interface RequestBodyJSON {
    deleteIds?: number[];
    addToken?: string;
    priority?: number;
  }


  export interface ResponseOk {
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
