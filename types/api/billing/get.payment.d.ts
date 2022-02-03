import { APIHead } from '../head';
import { APIStandardError } from '../error';

export namespace BillingGetPayment {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface Item {
    id: number;
    time: string;
    amount: {
      paid: number;
    };
    type: 'card' | 'charge';
  }

  export interface Amount {
    total: number;
    paid: number;
    unpaid: number;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    paymentStatus: 'pending' | 'paid' | 'partialFailure' | 'failure';
    billingId: number;
    items: Item[];
    amount: Amount;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
