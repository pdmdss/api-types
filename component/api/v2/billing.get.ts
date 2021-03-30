import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2BillingGet {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    targetDate: string;
    items: {
      classification: string;
      classificationName: string;
      targetTime: {
        start: string;
        end: string | null;
      }[];
      amount: {
        subtotal: number;
      };
    }[];
    amount: {
      total: number;
      discount: number;
      payment: number;
    };
    paymentStatus?: 'paid' | 'unpaid' | 'error';
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
