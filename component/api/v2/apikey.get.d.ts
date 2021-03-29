import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2ApiKeyList {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    apikey: {
      id: number;
      name: string | null;
      key: string;
      createTime: string;
      scope: string[];
      allowed: {
        ipAddress: string[];
        originDomain: string[];
      };
    }[];
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}