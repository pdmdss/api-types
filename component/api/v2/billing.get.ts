import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2BillingGet {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    targetDate: string;
    billing: {
      id?: number;
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
    }
    payment?: {
      status: 'pending' | 'paid' | 'partialFailure' | 'failure';
      items: {
        id: number;
        time: string;
        amount: {
          paid: number;
        }
        type: 'card' | 'charge';
      }[];
      amount: {
        total: number;
        paid: number;
        unpaid: number;
      };
    };
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
