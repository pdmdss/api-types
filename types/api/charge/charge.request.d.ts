export namespace ChargeRequest {
  export interface Base {
    type: string;
    amount: number;
  }

  export interface Card extends Base {
    type: 'card';
    cardToken?: string;
    cardId?: number;
  }

  export interface Convenience extends Base {
    type: 'convenience';
    store: 'daily-yamazaki' | 'family-mart' | 'lawson' | 'ministop' | 'seicomart';
    phone: string;
  }

  export interface Bank extends Base {
    type: 'bank';
    familyName: string;
    givenName: string;
    familyNameKana: string;
    givenNameKana: string;
    phone: string;
  }

  export interface PayPal extends Base {
    type: 'paypal';
    orderId: string;
  }

  export interface Code extends Omit<Base, 'amount'> {
    type: 'code';
    code: string;
  }

  export type All = Card | Convenience | Bank | PayPal | Code;
}
