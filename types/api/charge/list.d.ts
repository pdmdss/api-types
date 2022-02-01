import { APIStandardError } from '@t/api/error';
import { APIHead } from '@t/api/head';

export namespace ChargeList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    cursorToken?: string;
  }


  export interface Item {
    id: number;
    amount: {
      balance: number;
      issued: number;
    };
    expirationTime: string;
    issuedTime: string;
  }

  export interface Amount {
    total: number;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
    amount: Amount;
    nextToken?: string;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
