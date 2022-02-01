import { APIHead } from '@t/api/head';
import { APIStandardError } from '@t/api/error';

export namespace AccountGet {
  export type Method = 'GET';

  export interface QueryParams {
  }


  export interface Account {
    id: number;
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
  }

  export interface ResponseOk extends APIHead {
    status: 'ok';
    account: Account;
  }

  export type ResponseError = APIStandardError;

  export type Response = ResponseOk | ResponseError;
}
