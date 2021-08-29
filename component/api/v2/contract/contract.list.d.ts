import { APIV2Head } from '../head';
import { APIV2BaseError, APIV2Error } from '../error';


export namespace APIV2ContractList {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
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
    }[];
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 404>;

  export type Response = ResponseOk | ResponseError;
}
