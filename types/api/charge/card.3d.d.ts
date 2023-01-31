import { APIStandardError } from '../error';

export namespace ChargeCard3d {
  export type Method = 'POST';

  export interface QueryParams {
  }

  export interface RequestBodyJSON {
    cardToken?: string;
    cardId?: number;
    amount: number;
  }


  export interface ResponseOk {
    transaction: {
      agencyId: string;
    };
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
