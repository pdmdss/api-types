import { APIHead } from '../head';
import { APIStandardError } from '../error';

export namespace BillingList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    cursorToken?: string;
  }


  export interface Item {
    id: number;
    target: {
      start: string;
      end: string;
    };
    status: 'pending' | 'paid' | 'partialFailure' | 'failure';
    amount: {
      total: number;
      unpaid: number;
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
