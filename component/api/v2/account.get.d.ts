import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2AccountGet {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    account: {
      id: number;
      mailAddress: string;
      twoFactorAuth: boolean;
      domicile: {
        prefCode: string;
        cityCode: string;
      };
      isNoticeMail: boolean;
      isCard: boolean;
    };
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
