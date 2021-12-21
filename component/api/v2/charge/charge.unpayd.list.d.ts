import { APIV2Head } from '../head';
import { APIV2BaseError } from '../error';

export namespace APIV2ChargeUnpaidList {
  export type Method = 'GET';

  export type QueryParams = {
    limit?: number;
    cursorToken?: string;
  };

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number;
      amount: {
        issue: number;
      };
      dueTime: string;
      time: string;
      type: 'convenience' | 'bank';
      url: string;
    }[];
    amount: {
      total: number;
    };
    nextToken?: string;
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
