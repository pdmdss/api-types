import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2BillingPaymentGet {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    billingId: number;
    items: {
      billingId: number;
      status: 'pending' | 'paid' | 'partialFailure' | 'failure';
      amount: {
        total: number;
        paid: number;
        unpaid: number;
      };
    }[];
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
