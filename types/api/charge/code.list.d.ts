import { APIStandardError } from '../error';
import { APIHead } from '../head';

export namespace ChargeCodeList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    cursorToken?: string;
  }


  export interface Item {
    id: number;
    code: string | null;
    isRegistered: boolean;
    amount: {
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
