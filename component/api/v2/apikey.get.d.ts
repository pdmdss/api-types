import { APIV2Head } from './head';
import { APIV2BaseError } from './error';

export namespace APIV2ApiKeyGet {
  export type Method = 'GET';

  export type QueryParams = {};

  export interface ResponseOk extends APIV2Head {
    status: 'ok';
    id: number;
    name: string | null;
    key: string;
    createTime: string;
    scopes: string[];
    allowed: {
      ipAddresses: string[];
      originDomains: string[];
    };
  }

  export type ResponseError = APIV2BaseError;

  export type Response = ResponseOk | ResponseError;
}
