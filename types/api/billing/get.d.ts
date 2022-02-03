import { APIHead } from '../head';
import { APIStandardError } from '../error';

export namespace BillingGet {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface Item {
    planId: number;
    planName: string;
    targetTime: {
      start: string;
      end: string | null;
    }[];
    amount: {
      subtotal: number;
    };
  }

  export interface Amount {
    total: number;
    discount: number;
    payment: number;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    targetDate: string;
    billingId?: number;
    items: Item[];
    amount: Amount;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
