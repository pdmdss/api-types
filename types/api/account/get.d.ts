import { APIHead } from '../head';
import { APIStandardError } from '../error';

export namespace AccountGet {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface Account {
    id: number;
    type: 'consumer' | 'business' | 'sub_account';
    mailAddress: string;
    twoFactorAuth: boolean;
    domicile: {
      prefCode: string;
      cityCode: string;
    };
    isNoticeMail: boolean;
    maxCharge: number;
    maxConnectionCounts: number;
    status: 'ok' | 'locked';
    org?: string[];
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    account: Account;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
