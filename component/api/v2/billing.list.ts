import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2BillingList {
  export type Method = 'GET';

  export type QueryParams = {
    limit?: number;
    cursorToken?: string;
  };

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number;
      target: {
        start: string;
        end: string;
      };
    }[];
    nextToken?: string;
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
