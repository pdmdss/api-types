import { APIV2Head } from '../head';
import { APIV2BaseError } from '../error';

export namespace APIV2ChargeCodeList {
  export type Method = 'GET';

  export type QueryParams = {
    limit?: number;
    cursorToken?: string;
  };

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number;
      code:string;
      amount: {
        issued: number;
      };
      expirationTime: string;
      issuedTime: string;
    }[];
    amount: {
      total: number;
    };
    nextToken?: string;
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
