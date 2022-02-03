import { APIStandardError } from '../error';
import { APIHead } from '../head';

export namespace ChargeUnpaidList {
  export type Method = 'GET';

  export interface QueryParams {
    limit?: number;
    cursorToken?: string;
  }


  export interface Item {
    id: number;
    amount: {
      request: number;
    };
    dueTime: string;
    time: string;
    type: 'convenience' | 'bank';
    url: string;
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
