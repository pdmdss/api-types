import { APIV2BaseError } from '../error';

export namespace APIV2ChargeCreate {
  export type Method = 'POST';

  export type QueryParams = {};

  type Card = {
    type: 'card';
    cardToken?: string;
    cardId?: number;
  };

  type Convenience = {
    type: 'convenience';
    phone: string;
  };

  type Bank = {
    type: 'bank';
    familyName: string;
    givenName: string;
    familyNameKana: string;
    givenNameKana: string;
    phone: string;
  };

  type PayPal = {
    type: 'paypal';
    orderId: string;
  };

  export type RequestBodyJSON = Card | Convenience | Bank | PayPal;


  export interface ResponseOk {
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
