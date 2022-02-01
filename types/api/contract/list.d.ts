import { APIStandardError } from '@t/api/error';
import { APIHead } from '@t/api/head';

export namespace ContractList {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface Item {
    id: number | null;
    planId: number;
    planName: string;
    classification: string;
    price: {
      day: number;
      month: number;
    };
    start: string | null;
    isValid: boolean;
    connectionCounts: number;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    items: Item[];
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
