import { APIHead } from '../head';
import { APIStandardError } from '../error';

export namespace BillingGet {
  export type Method = 'GET';

  export interface QueryParams {
  }

  export interface Payment {
    id: number;
    agency: 'payjp' | 'dmdata';
    amount: {
      settlement: number;
      refund: number | null;
    };
  }

  export interface ContractItem {
    plan: {
      id: number;
      name: string;
    };
    period: {
      start: string;
      end: string | null;
    };
    amount: {
      settlement: number;
      determined: number | null;
      refund: number | null;
    };
  }

  export interface Amount {
    settlement: number;
    determined: number | null;
    refund: number | null;
    discount: number | null;
    tax: number;
    total: number;
  }

  export interface Item {
    id: number;
    status: 'prepayment' | 'liquidation';
    contracts: ContractItem[];
    payments: Payment[];
    amount: Amount;
    createTime: string;
    updateTime: string;
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    target: string;
    items: Item[];
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
