import { APIV2Head } from './head';
import { APIV2BaseError, APIV2Error } from './error';


export namespace APIV2ContractList {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    items: {
      id: number | null;
      classification: string;
      classificationName: string;
      price: {
        day: number;
        month: number;
      };
      start: Date | null;
      isValid: boolean;
      connectionCounts: string;
    }[];
  }

  export type ResponseError = APIV2BaseError | APIV2Error<string, 404>;

  export type Response = ResponseOk | ResponseError;
}