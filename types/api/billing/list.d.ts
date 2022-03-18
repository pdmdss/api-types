import { APIHead } from '../head';
import { APIStandardError } from '../error';

export namespace BillingList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    cursorToken?: string;
  }


  export interface Item {
    target: string;
    status: 'prepayment' | 'liquidation';
    amount: {
      settlement: number;
      determined: number | null;
      refund: number | null;
      discount: number | null;
      tax: number;
      total: number;
    };
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
    nextToken?: string;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
