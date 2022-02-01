import { APIHead } from '@t/api/head';
import { APIStandardError } from '@t/api/error';

export namespace AccountCardList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: string;
    cursorToken?: string;
  }


  export interface Card {
    id: number;
    brand: string;
    numberLast4: string;
    createTime: string;
    expiration: string;
    priority: boolean;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Card[];
    nextToken?: string;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
