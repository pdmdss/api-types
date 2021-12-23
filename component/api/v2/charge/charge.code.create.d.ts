import { APIV2BaseError } from '../error';

export namespace APIV2ChargeCodeCreate {
  export type Method = 'POST';

  export type QueryParams = {};

  type Card = {
    type: 'card';
    cardToken?: string;
    cardId?: number;
    amount: number;
  };
  export type RequestBodyJSON = Card;


  export interface ResponseOk {
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
