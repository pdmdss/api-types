import { APIStandardError } from '../error';
import { APIHead } from '../head';

export namespace ContractApplication {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface Application {
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
    explanation: string;
    serviceUrl: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    application: Application;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
